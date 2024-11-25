import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const SearchResults = () => {
    
    const { query } = useParams(); // Extract search query from URL
    const [videos, setVideos] = useState([]);
    console.log(videos);
    

    useEffect(() => {
        // Fetch videos based on the searchTerm
        const fetchVideos = async () => {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
            const data = await response.json();
            setVideos(data.items); // Assuming the response contains items with video details
        };

        fetchVideos();
    }, [query]);

    return (
        <div className="px-4 py-6">
              <h1 className="font-bold text-xl mb-4">Search Results for: <span className="text-gray-500">{query}</span></h1>
            
            <div className="space-y-6">
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:bg-gray-100">
                            {/* Video Thumbnail */}
                            <img 
                                className="w-[500px] h-[281px] object-cover rounded-lg"
                                src={video.snippet.thumbnails.high.url} 
                                alt={video.snippet.title} 
                            />

                            {/* Video Details */}
                            <div className="flex-1">
                                
                                    <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">{video.snippet.title}</h3>
                               
                                <p className="text-sm text-gray-500 mt-2">{video.snippet.channelTitle}</p>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-3">{video.snippet.description}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500">No results found for "{query}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
