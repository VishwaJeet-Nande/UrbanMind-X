"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createComplaint } from "@/services/complaint";

export default function ComplaintForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [wardName, setWardName] =
    useState("");

  const [latitude, setLatitude] =
    useState<number | null>(null);

  const [longitude, setLongitude] =
    useState<number | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(
          position.coords.latitude
        );

        setLongitude(
          position.coords.longitude
        );
      },
      () => {
        alert(
          "Unable to access location."
        );
      }
    );
  };

  const handleSubmit = async () => {
    if (
      !title ||
      !description ||
      !wardName
    ) {
      alert(
        "Please complete all fields."
      );

      return;
    }

    if (
      latitude === null ||
      longitude === null
    ) {
      alert(
        "Please detect your location."
      );

      return;
    }

    try {
      setLoading(true);

      await createComplaint({
        title,
        description,
        latitude,
        longitude,
        ward_name: wardName,
      });

      setSuccess(true);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to submit complaint."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="glass p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-green-400">
          Complaint Submitted
        </h2>

        <p className="mt-2 text-slate-300">
          AI analysis completed and
          complaint stored successfully.
        </p>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-2xl max-w-3xl">
      <h2 className="text-3xl font-bold">
        Report Complaint
      </h2>

      <p className="text-slate-400 mt-2 mb-8">
        Help improve your city.
      </p>

      <div className="space-y-5">
        <input
          type="text"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700"
        />

        <textarea
          placeholder="Describe the issue..."
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700"
        />

        <input
          type="text"
          placeholder="Ward Name"
          value={wardName}
          onChange={(e) =>
            setWardName(
              e.target.value
            )
          }
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700"
        />

        <button
          onClick={detectLocation}
          className="bg-cyan-500 text-black font-semibold px-5 py-3 rounded-xl"
        >
          📍 Detect Location
        </button>

        {latitude && longitude && (
          <div className="text-sm text-green-400">
            Location Detected:
            <br />
            Lat: {latitude}
            <br />
            Lng: {longitude}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold p-4 rounded-xl"
        >
          {loading
            ? "Submitting..."
            : "Submit Complaint"}
        </button>
      </div>
    </div>
  );
}