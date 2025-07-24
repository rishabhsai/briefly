import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface LoaderProps {
  progress: number;
  step: string;
}

const Loader = ({ progress, step }: LoaderProps) => {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  
  // Jokes to display during loading
  const jokes = [
    "Why did the newsletter go to therapy? It had too many issues! 😄",
    "What do you call a newsletter that's always late? A procrasti-letter! 📰",
    "Why did the AI cross the road? To get to the other side of the algorithm! 🤖",
    "What's a newsletter's favorite dance? The content shuffle! 💃",
    "Why did the social media post feel lonely? It had no followers! 😂",
    "What do you call a newsletter that's always positive? An optimi-letter! ✨",
    "Why did the template feel confident? It had great structure! 🏗️",
    "What's a newsletter's favorite movie? The Content Matrix! 🎬"
  ];

  // Change joke every 6 seconds, independent of progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [jokes.length]);

  const currentJoke = jokes[currentJokeIndex];

  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="analyze">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={54} width={54}>
            <rect height={24} width={24} />
            <path strokeLinecap="round" strokeWidth="1.5" stroke="black" d="M19.25 9.25V5.25C19.25 4.42157 18.5784 3.75 17.75 3.75H6.25C5.42157 3.75 4.75 4.42157 4.75 5.25V18.75C4.75 19.5784 5.42157 20.25 6.25 20.25H12.25" className="board" />
            <path d="M9.18748 11.5066C9.12305 11.3324 8.87677 11.3324 8.81234 11.5066L8.49165 12.3732C8.47139 12.428 8.42823 12.4711 8.37348 12.4914L7.50681 12.8121C7.33269 12.8765 7.33269 13.1228 7.50681 13.1872L8.37348 13.5079C8.42823 13.5282 8.47139 13.5714 8.49165 13.6261L8.81234 14.4928C8.87677 14.6669 9.12305 14.6669 9.18748 14.4928L9.50818 13.6261C9.52844 13.5714 9.5716 13.5282 9.62634 13.5079L10.493 13.1872C10.6671 13.1228 10.6671 12.8765 10.493 12.8121L9.62634 12.4914C9.5716 12.4711 9.52844 12.428 9.50818 12.3732L9.18748 11.5066Z" className="star-2" />
            <path d="M11.7345 6.63394C11.654 6.41629 11.3461 6.41629 11.2656 6.63394L10.8647 7.71728C10.8394 7.78571 10.7855 7.83966 10.717 7.86498L9.6337 8.26585C9.41605 8.34639 9.41605 8.65424 9.6337 8.73478L10.717 9.13565C10.7855 9.16097 10.8394 9.21493 10.8647 9.28335L11.2656 10.3667C11.3461 10.5843 11.654 10.5843 11.7345 10.3667L12.1354 9.28335C12.1607 9.21493 12.2147 9.16097 12.2831 9.13565L13.3664 8.73478C13.5841 8.65424 13.5841 8.34639 13.3664 8.26585L12.2831 7.86498C12.2147 7.83966 12.1607 7.78571 12.1354 7.71728L11.7345 6.63394Z" className="star-1" />
            <path className="stick" strokeLinejoin="round" strokeWidth="1.5" stroke="black" d="M17 14L21.2929 18.2929C21.6834 18.6834 21.6834 19.3166 21.2929 19.7071L20.7071 20.2929C20.3166 20.6834 19.6834 20.6834 19.2929 20.2929L15 16M17 14L15.7071 12.7071C15.3166 12.3166 14.6834 12.3166 14.2929 12.7071L13.7071 13.2929C13.3166 13.6834 13.3166 14.3166 13.7071 14.7071L15 16M17 14L15 16" />
          </svg>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            <span className="step-text">{step}</span>
            <span className="percentage">{progress}%</span>
          </div>
        </div>

        <div className="joke-container">
          <p className="joke-text">{currentJoke}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: white;
    gap: 2rem;
  }

  .analyze svg path.stick {
    transform: translate(0);
    animation: stick 2s ease infinite;
  }

  .analyze svg path.star-1 {
    fill: #ff4500;
    animation: sparkles 2s ease infinite, scaleStars 2s ease infinite,
      colorChange 2s ease infinite;
    animation-delay: 150ms;
  }

  .analyze svg path.star-2 {
    fill: #00ff00;
    animation: sparkles 2s ease infinite, scaleStars 2s ease infinite,
      colorChange 2s ease infinite;
  }

  .board {
    animation: bounce 2s ease infinite;
  }

  .progress-container {
    width: 100%;
    max-width: 400px;
    padding: 0 2rem;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #f3f4f6;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .progress-fill {
    height: 100%;
    background: #000000;
    border-radius: 4px;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .progress-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #374151;
    font-size: 0.875rem;
  }

  .step-text {
    font-weight: 500;
  }

  .percentage {
    font-weight: 600;
  }

  .joke-container {
    max-width: 500px;
    text-align: center;
    padding: 0 2rem;
  }

  .joke-text {
    color: #6b7280;
    font-size: 0.875rem;
    font-style: italic;
    line-height: 1.5;
    animation: fadeInOut 3s ease-in-out infinite;
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes sparkles {
    0% {
      opacity: 1;
    }
    35% {
      opacity: 1;
    }
    55% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes stick {
    0% {
      transform: translate3d(0, 0, 0) rotate(0);
    }
    25% {
      transform: translate3d(0, 0, 0) rotate(0);
    }
    50% {
      transform: translate3d(3px, -2px, 0) rotate(8deg);
    }
    75% {
      transform: translate3d(0, 0, 0) rotate(0);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(0);
    }
  }

  @keyframes scaleStars {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-1px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes colorChange {
    0% {
      fill: #ff4500;
    }
    25% {
      fill: #ffd700;
    }
    50% {
      fill: #00ff00;
    }
    75% {
      fill: #1e90ff;
    }
    100% {
      fill: #ff4500;
    }
  }
`;

export default Loader; 