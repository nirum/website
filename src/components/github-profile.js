import React from "react"
export default ({ user }) => (
  <div>
      <h2>Overview</h2>
      <div className="flex flex-row flex-wrap mt-4">
        <div className="w-32 bg-transparent p-4 rounded-lg border-2 border-gray-500">
            <p className="w-full text-center text-gray-200 uppercase tracking-wider">followers</p>
            <p className="text-gray-050 text-center text-4xl font-semibold">{user.followers}</p>
        </div>
        <div className="w-32 bg-transparent ml-4 p-4 rounded-lg border-2 border-gray-500">
            <p className="text-center text-gray-200 uppercase tracking-wider">Following</p>
            <p className="text-gray-050 text-center text-4xl font-semibold">{user.following}</p>
        </div>
        <div className="w-32 bg-transparent ml-4 p-4 rounded-lg border-2 border-gray-500">
            <p className="text-center text-gray-200 uppercase tracking-wider">Repos</p>
            <p className="text-gray-050 text-center text-4xl font-semibold">{user.public_repos}</p>
        </div>
        <div className="w-32 bg-transparent ml-4 p-4 rounded-lg border-2 border-gray-500">
            <p className="text-center text-gray-200 uppercase tracking-wider">Gists</p>
            <p className="text-gray-050 text-center text-4xl font-semibold">{user.public_gists}</p>
        </div>
      </div>
  </div>
)
