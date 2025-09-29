import React from "react";
import { assets } from "../../assets/assets";

const CommentTable = ({ comment, fetchComment }) => {
  const { blog, createdAt, name, content, isApproved, _id } = comment;
  const blogDate = new Date(createdAt).toLocaleDateString();

  return (
    <tr className="border-y border-gray-300">
      <td className="px-6 py-4">
        <p>
          <b className="text-gray-600">Blog:</b> {blog.title}
        </p>
        <p>
          <b className="text-gray-600">Name:</b> {name}
        </p>
        <p>
          <b className="text-gray-600">Comment:</b> {content}
        </p>
      </td>

      <td className="px-6 py-4 max-sm:hidden">{blogDate}</td>

      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!isApproved ? (
            <img
              src={assets.tick_icon}
              alt="approve"
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              onClick={() => {
                // Add approval logic here, then call fetchComment()
              }}
            />
          ) : (
            <span className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </span>
          )}
          <img
            src={assets.bin_icon}
            alt="delete"
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            onClick={() => {
              // Add delete logic here, then call fetchComment()
            }}
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTable;
