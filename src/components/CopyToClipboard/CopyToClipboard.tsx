import React from "react";

function CopyToClipboard({ dataInput, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 108.26 145"
      className={"copy-to-clipboard"}
      onClick={onClick}
    >
      <title> Copy {dataInput} Number to clipboard</title>
      <g data-name="Layer 2">
        <g data-name="Layer 1" className={"container-path"}>
          <path d="M6.2 120.72V9.28A3.08 3.08 0 019.28 6.2H84a3.08 3.08 0 013.08 3.08V11h6.2V9.28A9.27 9.27 0 0084 0H9.28A9.27 9.27 0 000 9.28v111.44A9.27 9.27 0 009.28 130H11v-6.2H9.28a3.08 3.08 0 01-3.08-3.08z" />
          <path d="M99 15H24.28A9.28 9.28 0 0015 24.28v111.44a9.28 9.28 0 009.28 9.28H99a9.28 9.28 0 009.28-9.28V24.28A9.28 9.28 0 0099 15zm3.08 120.72A3.09 3.09 0 0199 138.8H24.28a3.09 3.09 0 01-3.08-3.08V24.28a3 3 0 01.22-1.13 3.08 3.08 0 012.86-1.95H99a3.09 3.09 0 013.08 3.08z" />
        </g>
      </g>
    </svg>
  );
}

type Props = {
  dataInput: string;
  onClick: () => void;
};

export default CopyToClipboard;
