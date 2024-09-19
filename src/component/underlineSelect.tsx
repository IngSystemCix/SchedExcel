import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface UnderlineSelectProps {
  title: string;
  options: Option[];
}

export const UnderlineSelect: React.FC<UnderlineSelectProps> = ({
  title,
  options,
}) => {
  return (
    <form className="w-full">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="block py-2.5 px-0 w-full text-sm text-green-500 bg-transparent border-0 border-b-2 border-green-200 appearance-none dark:text-green-400 dark:border-green-700 focus:outline-none focus:ring-0 focus:border-green-200 peer"
      >
        <option selected>{title}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};
