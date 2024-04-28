import React, { useState, useEffect } from 'react';
import {GOOGLE_API_KEY} from "../utils/constants"
import { useDispatch } from 'react-redux';
import { setVideos } from '../utils/videoSlice';
import { setSearchClicked } from '../utils/searchSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedVideos, setSearchedVideos] = useState([]);
  const dispatch = useDispatch();

  // Define the fetchSuggestions function outside of useEffect
  const fetchSuggestions = async () => {
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=$AIzaSyAyoDzr09E-_RBayaDinXbbmIWONvYtRVs`
      );
      const data = await response.json();
      setSuggestions(data.items.map((item) => item.snippet.title));
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    
    fetchSuggestions();

    

    return () => {

    };
  }, [searchTerm]); // Re-run useEffect on searchTerm change

  const handleSearchClick = async () => {
    if (!searchTerm) return; 
  
    setIsLoading(true);
  
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=20&gl=$US&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setSearchedVideos(data.items);
      dispatch(setSearchClicked());
      dispatch(setVideos([]));
      dispatch(setVideos(searchedVideos));
      console.log(searchedVideos);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);

    // Optionally, re-fetch suggestions immediately for a more responsive UX
    // fetchSuggestions();  // Uncomment if desired
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]); 
  };

  return (
    <div className="search-bar">
      <div className="col-span-10 text-center">
      <input className='w-2/3 border border-gray-400 p-2 rounded-l-full' type='text'  placeholder="Search YouTube..."
      value={searchTerm}
      onChange={handleSearchTermChange}/>
      <button className='border px-4 bg-gray-200 border-gray-400 p-2 rounded-r-full' onClick={()=>{handleSearchClick()}}> 🔍 </button>
    </div>
      {isLoading && <div className="loading">Loading...</div>}
      {suggestions.length > 0 && (
        <ul className="">
          {suggestions.map((suggestion, index) => (
            <li className='border bottom-2 w-2/3' key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;