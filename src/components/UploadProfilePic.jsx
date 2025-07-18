import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function UploadProfilePic() {
  const { userData } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(userData?.photoURL || "/images/DefaultProfile.png");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const user = auth.currentUser;
    if (!user) return;

    setUploading(true);

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `profileImages/${user.uid}/${file.name}`);

      // Upload image
      const snapshot = await uploadBytes(storageRef, file);

      // Get download URL
      const url = await getDownloadURL(snapshot.ref);

      // Save URL to Firestore
      await updateDoc(doc(db, "users", user.uid), {
        photoURL: url,
      });

      setPreview(url);
      alert("Profile image updated!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload image.");
    }

    setUploading(false);
  };

  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <img
        src={preview}
        alt="Current profile"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #0f52ba",
          marginBottom: "10px"
        }}
      />
      <div>
        <label
          htmlFor="upload-input"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          {uploading ? "Uploading..." : "Change Photo"}
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
