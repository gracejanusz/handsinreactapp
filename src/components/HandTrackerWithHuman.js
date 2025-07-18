import React, { useRef, useEffect } from 'react';
import { Human } from '@vladmandic/human';

const DETECTION_INTERVAL_MS = 2000; // ⏱️ Run detection every 2 seconds

const human = new Human({
  modelBasePath: 'https://vladmandic.github.io/human/models',
  hand: {
    enabled: true,
    maxHands: 1,
    detector: {
      rotation: true,
      iouThreshold: 0.3,
      scoreThreshold: 0.5,
    },
    landmark: {
      use3D: true,
    },
  },
  face: { enabled: false },
  body: { enabled: false },
});

export default function HandTrackerWithHuman({ onResult }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let localStream = null;

    const setup = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        localStream = stream;

        const videoEl = videoRef.current;
        if (!videoEl) return;

        videoEl.srcObject = stream;
        await videoEl.play();

        await human.load();
        console.log("✅ Human.js models loaded:", human.models.loaded);

        await human.warmup();
        console.log("🔥 Warmed up with video input");

        detect(videoEl);
      } catch (err) {
        console.error("🚫 Setup failed:", err);
      }
    };

    const drawKeypoints = (ctx, keypoints) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.strokeStyle = 'lime';
      ctx.fillStyle = 'lime';
      ctx.lineWidth = 2;

      keypoints.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
        ctx.fill();
      });
    };

    const detect = async (videoEl) => {
      console.log("🎥 Running detect...");
      const result = await human.detect(videoEl);
      console.log("📦 Detection result:", result);

      const canvas = canvasRef.current;
      if (canvas && videoEl.videoWidth > 0) {
        canvas.width = videoEl.videoWidth;
        canvas.height = videoEl.videoHeight;
        const ctx = canvas.getContext('2d');

        if (result.hand?.length > 0) {
            const hand = result.hand[0]; // 👈 FIXED: Access first hand object
            const keypoints = hand.keypoints;

          if (keypoints?.length === 21) {
            drawKeypoints(ctx, keypoints);

            const landmarks = keypoints.map(p => [p.x ?? null, p.y ?? null, p.z ?? 0]);
            const valid = landmarks.every(p => p.every(coord => coord !== null));
            if (valid) {
              console.log("🖐️ Landmarks sent to API:", landmarks);
              onResult?.(landmarks);
            } else {
              console.warn("⚠️ Invalid landmarks detected:", landmarks);
            }
          }
        } else {
          console.warn("✋ No hands detected.");
          if (canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }

      // 🔁 Wait DETECTION_INTERVAL_MS before next run
      setTimeout(() => detect(videoEl), DETECTION_INTERVAL_MS);
    };

    setup();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onResult]);

  return (
    <div style={{ position: 'relative', width: '640px', height: '480px' }}>
      <video
        ref={videoRef}
        width="640"
        height="480"
        autoPlay
        muted
        style={{ transform: 'scaleX(-1)', borderRadius: '12px', position: 'absolute', zIndex: 1 }}
      />
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}
      />
    </div>
  );
}
