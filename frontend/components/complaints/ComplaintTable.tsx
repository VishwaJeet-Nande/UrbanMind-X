"use client";

import { Complaint } from "@/types/complaint";

interface Props {
  complaints: Complaint[];

  onSelect: (
    complaint: Complaint
  ) => void;
}

export default function ComplaintTable({
  complaints,
  onSelect,
}: Props) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left p-4">
              Title
            </th>

            <th className="text-left p-4">
              Priority
            </th>

            <th className="text-left p-4">
              Department
            </th>

            <th className="text-left p-4">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {complaints.map(
            (complaint) => (
              <tr
                key={complaint.id}
                onClick={() =>
                  onSelect(complaint)
                }
                className="cursor-pointer border-b border-slate-800 hover:bg-slate-900"
              >
                <td className="p-4">
                  {complaint.title}
                </td>

                <td className="p-4">
                  {
                    complaint.priority
                  }
                </td>

                <td className="p-4">
                  {
                    complaint.recommended_department
                  }
                </td>

                <td className="p-4">
                  {complaint.status}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}