// ベルの色はとりあえず何でもいい

export const BellText = ({ text }) => {
  return (
    <div>
      {/* ベルのアイコン */}
      <div className="my-2">
        <svg
          width="40"
          height="40"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.75 16.333C36.75 13.0841 35.4594 9.96827 33.1621 7.67095C30.8647 5.37363 27.7489 4.08301 24.5 4.08301C21.2511 4.08301 18.1353 5.37363 15.8379 7.67095C13.5406 9.96827 12.25 13.0841 12.25 16.333C12.25 30.6247 6.125 34.708 6.125 34.708H42.875C42.875 34.708 36.75 30.6247 36.75 16.333Z"
            fill="#FCCDE2"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.0322 42.875C27.6732 43.4938 27.158 44.0074 26.5381 44.3645C25.9183 44.7215 25.2155 44.9094 24.5001 44.9094C23.7847 44.9094 23.0819 44.7215 22.4621 44.3645C21.8422 44.0074 21.327 43.4938 20.968 42.875"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ベルのテキスト */}
      <div className="text-xs font-semibold text-gray-600/40 sm:text-base">
        {text}
      </div>
    </div>
  );
};
