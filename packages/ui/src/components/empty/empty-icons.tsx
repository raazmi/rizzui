import React from 'react';

interface EmptySVGIconProps {
  className?: string;
}

export function DefaultIcon({ className = 'w-44 h-auto' }: EmptySVGIconProps) {
  return (
    <svg
      data-testid="empty-default-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184 152"
      {...(className && { className })}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse
            fillOpacity={0.8}
            className="fill-gray-100"
            cx={67.797}
            cy={106.89}
            rx={67.797}
            ry={12.668}
          />
          <path
            d="M122.034 69.674 98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            className="fill-gray-300"
          />
          <path
            d="M101.537 86.214 80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            className="fill-gray-50"
          />
          <path
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zm.262 39.814h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zm0 11.763h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zm78.873 43.502c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569a7.33 7.33 0 0 1-.221 1.789z"
            className="fill-gray-200"
          />
        </g>
        <path
          d="m149.121 33.292-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          className="fill-gray-200"
        />
        <g className="fill-gray-0" transform="translate(149.65 15.383)">
          <ellipse cx={20.654} cy={3.167} rx={2.849} ry={2.815} />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  );
}

export function EmptyBoxIcon({ className = 'h-16 w-auto' }: EmptySVGIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 103 64"
      {...(className && { className })}
    >
      <path
        d="M51.2 64c28.277 0 51.2-5.015 51.2-11.2 0-6.186-22.923-11.2-51.2-11.2C22.923 41.6 0 46.614 0 52.8 0 58.985 22.923 64 51.2 64Z"
        className="fill-gray-50"
      />
      <path
        d="m71.344 2.277.022.035.028.032 16.108 18.261V34.7h-72.6V20.607L31.011 2.342l.027-.031.023-.036C31.777 1.121 32.776.5 33.75.5h34.902c.976 0 1.973.62 2.691 1.777Z"
        className="fill-gray-0 stroke-gray-300"
      />
      <path
        d="M67.083 25.49c0-1.184.368-2.248.94-3.005.574-.757 1.328-1.183 2.124-1.184h17.355V49.82c0 1.598-.497 3.035-1.28 4.061-.781 1.026-1.825 1.62-2.94 1.62h-64.16c-1.114 0-2.158-.594-2.94-1.62-.782-1.027-1.28-2.464-1.28-4.061V21.3h17.356c.796 0 1.55.426 2.123 1.182.573.756.94 1.82.94 3.004v.035c0 2.716 1.72 5.141 4.08 5.141h23.603c1.174 0 2.204-.624 2.925-1.563.721-.938 1.154-2.212 1.154-3.597v-.012Z"
        className="fill-gray-100 stroke-gray-300"
      />
    </svg>
  );
}

export function EmptyProductBoxIcon({
  className = 'w-80 h-auto',
}: EmptySVGIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 350 351"
      {...(className && { className })}
    >
      <g>
        <path
          d="M90.268 325.768C82.864 324.177-6.228 309.927.346 204.744 6.886 99.561 15.12 67.948 49.753 56.361 84.386 44.774 168.53-9.98 234.579 42.11c66.049 52.09 137.322 98.749 109.02 181.899-28.267 83.115-32.903 110.855-106.667 106.601-73.765-4.255-111.443 2.663-146.664-4.843Z"
          className="fill-gray-50"
        />
        <path
          d="M71.827 299.965c-1.8 1.315-3.39 2.906-3.252 5.431.276 5.395 9.514 6.675 13.285 7.194 6.713.899 13.425.761 20.137 1.038 24.461.934 48.922 1.072 73.384.519 12.559-.277 25.118-.727 37.643-1.384 11.037-.553 23.285.138 33.734-4.116 6.262-2.56 12.282-5.742 18.164-9.131 4.878-2.837 11.175-5.534 14.047-10.792 5.051-9.269-12.663-11.103-17.542-12.106-19.167-4.012-38.923-4.704-58.402-5.292-19.825-.588-39.719-.242-59.475 1.868-24.773 2.629-51.24 10.999-71.446 26.598-.07.035-.173.104-.277.173Z"
          className="fill-gray-200"
        />
        <path
          d="M264.749 193.365H122.894v97.227h141.855v-97.227Z"
          className="fill-gray-200"
        />
        <path
          d="M264.784 193.365H122.929l18.787-21.687a4.604 4.604 0 0 1 3.46-1.591h137.149c1.003 0 1.557 1.21.9 1.971l-18.441 21.307Z"
          className="fill-gray-0"
        />
        <path
          d="M264.853 192.742H125.143c-.519 0-1.418-.173-1.903 0-.069.035-.173 0-.242 0 .208.277.415.588.623.865 4.602-5.327 9.238-10.653 13.84-15.98 1.626-1.902 3.183-3.908 4.947-5.707 1.28-1.314 2.63-1.211 4.221-1.211h131.337c1.211 0 2.595-.173 3.771 0 1.73.242.138 1.834-.519 2.594-5.294 6.088-10.553 12.21-15.846 18.298-.45.518-.865 1.003-1.315 1.521-.692.796.9 1.107 1.419.519 4.74-5.499 9.514-10.964 14.254-16.464 1.107-1.279 2.18-2.525 3.287-3.804.554-.623 1.384-1.349 1.349-2.249-.103-1.729-1.868-1.625-3.113-1.625H148.428c-1.003 0-2.041-.035-3.044 0-2.561.104-4.014 1.522-5.536 3.32-5.398 6.226-10.795 12.487-16.192 18.712-.485.554-.935 1.073-1.419 1.626-.45.519.139.865.623.865h136.076c1.834 0 3.737.138 5.536 0h.242c.935-.035 1.281-1.28.139-1.28Z"
          className="fill-gray-500"
        />
        <path
          d="m123.102 193.365-34.84 13.558v97.228l34.84-13.075v-97.711Z"
          className="fill-gray-50"
        />
        <path
          d="M122.825 193.122c-10.172 3.944-20.344 7.921-30.516 11.864-1.453.554-2.906 1.142-4.36 1.695-1.106.415-.068.692.589.45 10.172-3.943 20.344-7.921 30.516-11.864 1.453-.553 2.906-1.141 4.359-1.695 1.108-.415.07-.692-.588-.45ZM123.967 290.834v-93.077c0-.449-1.661-.173-1.661.45v93.077c-.034.449 1.661.173 1.661-.45Z"
          className="fill-gray-500"
        />
        <path
          d="m123.102 193.365-34.84 13.558-16.712-16.256c-1.591-1.557-1.038-4.255 1.073-5.05l28.578-10.722a3.012 3.012 0 0 1 3.183.657l18.718 17.813Z"
          className="fill-gray-100"
        />
        <path
          d="m122.203 193.71-33.942 13.213-14.185-14.077c-1.592-1.557-1.038-4.255 1.072-5.05 3.287-1.211 6.574-2.456 9.896-3.666 4.843-1.799 10.656-5.465 15.984-4.324 3.806.83 20.794 13.524 21.175 13.904Z"
          className="fill-gray-0"
        />
        <path
          d="M122.756 192.915c-10.172 3.943-20.344 7.921-30.516 11.864-1.453.553-2.906 1.141-4.36 1.695.381.034.762.069 1.108.069-4.256-4.151-8.546-8.301-12.802-12.452-1.003-.969-1.972-1.937-2.975-2.905-.658-.658-1.419-1.246-1.696-2.214-.76-2.836 2.976-3.563 4.879-4.254 6.781-2.525 13.528-5.085 20.31-7.61 1.556-.588 4.497-2.386 6.192-1.591.692.311 1.211.969 1.765 1.453.969.934 1.937 1.868 2.941 2.767 4.913 4.635 9.791 9.304 14.704 13.939.485.484 2.076-.208 1.523-.692-4.602-4.358-9.204-8.751-13.84-13.109-1.626-1.556-3.218-3.216-4.947-4.669-2.146-1.799-4.36-.692-6.574.138-7.127 2.663-14.255 5.361-21.417 8.025-1.764.657-3.84 1.141-5.466 2.109-1.938 1.142-2.491 3.632-1.038 5.362.45.553 1.003 1.003 1.522 1.487 5.12 4.981 10.207 9.961 15.327 14.907.312.312.761.208 1.107.07 10.172-3.943 20.344-7.921 30.516-11.864 1.454-.554 2.907-1.142 4.36-1.695 1.176-.38.207-1.141-.623-.83Z"
          className="fill-gray-500"
        />
        <path
          d="M229.908 206.923H87.604v97.228h142.304v-97.228Z"
          className="fill-gray-100"
        />
        <path
          d="M229.908 208.929c-4.567 6.814-9.826 15.945-13.078 21.791a11.203 11.203 0 0 1-9.757 5.741l-119.47.277v67.413h142.305v-95.222Z"
          className="fill-gray-0"
        />
        <path
          d="m264.783 193.365-34.875 13.558v97.228l34.875-13.075v-97.711Z"
          className="fill-gray-200"
        />
        <path
          d="m264.783 225.566-11.59 4.635c-3.979 1.591-8.546.311-11.106-3.113l-12.179-16.153v93.181l34.841-13.074v-65.476h.034Z"
          className="fill-gray-100"
        />
        <path
          d="M229.078 211.281v89.445c0 .346 1.66.104 1.66-.449v-89.445c.035-.346-1.66-.07-1.66.449ZM87.258 207.338H222.677c2.249 0 4.602.208 6.85 0 1.246-.138 2.561-.864 3.703-1.314 3.39-1.314 6.746-2.629 10.137-3.943 6.816-2.663 13.597-5.292 20.413-7.955.45-.173.865-.346 1.315-.519 1.107-.415.069-.83-.623-.554-5.224 2.041-10.449 4.047-15.673 6.088-6.228 2.421-12.629 4.565-18.718 7.298-.83.38.069.035.104.035-.139-.07-.588 0-.761 0H114.729c-8.753 0-17.576-.243-26.33 0h-.38c-.623.034-1.868.864-.761.864Z"
          className="fill-gray-500"
        />
        <path
          d="M263.919 223.629v67.482c.173-.173.311-.381.484-.554-5.259 1.972-10.553 3.943-15.812 5.915-6.193 2.317-12.559 4.393-18.648 6.987-.727.311.173.069-.035.034-.242-.034-.554 0-.796 0H91.133c-.934 0-2.076-.173-3.01 0-.139.035-.277 0-.38 0 .241.173.518.381.76.554v-71.044c0-.865-1.695-.623-1.695.138v71.044c0 .45.415.554.761.554h135.246c2.249 0 4.74.311 6.989 0 1.142-.173 2.353-.831 3.46-1.211 3.322-1.245 6.678-2.49 9.999-3.736 6.851-2.559 13.701-5.153 20.586-7.713.45-.173.9-.346 1.315-.484.208-.069.484-.311.484-.553V223.56c-.034-.934-1.729-.692-1.729.069Z"
          className="fill-gray-500"
        />
        <path
          d="M229.908 206.923H87.604L68.85 228.61c-.553.623-.103 1.591.727 1.591h139.744a.97.97 0 0 0 .726-.346l19.86-22.932Z"
          className="fill-gray-100"
        />
        <path
          d="M229.908 206.923H88.988c-2.18 4.185-4.256 8.44-6.54 12.556-1.418 2.525-1.66 6.675 2.423 6.675h120.853a9.04 9.04 0 0 0 6.193-2.456l17.991-16.775Z"
          className="fill-gray-0"
        />
        <path
          d="M230.219 206.37H88.814c-.691 0-1.349-.069-1.937.38-.519.415-.968 1.107-1.384 1.591a251.304 251.304 0 0 1-2.94 3.39c-4.637 5.361-9.308 10.757-13.944 16.118-1.003 1.141-1.245 2.732.761 2.905.761.07 1.557 0 2.353 0h135.142c.692 0 1.384.035 2.042 0 1.626-.103 2.387-1.383 3.39-2.525l14.636-16.913c1.211-1.384 2.421-2.802 3.632-4.185.658-.761-.934-.9-1.383-.381-4.637 5.361-9.273 10.688-13.875 16.049-1.937 2.248-3.84 4.566-5.847 6.745-.277.277.415.034-.138.138-.381.069-.831 0-1.211 0H74.318c-1.246 0-2.664.173-3.875 0-.138-.034-.45.069-.588 0-1.073-.622.553-1.937.934-2.352a7487.78 7487.78 0 0 0 16.054-18.574c.484-.553.934-1.072 1.418-1.625-.346.103-.657.242-1.003.346H211.986c5.743 0 11.591.311 17.334 0h.242c.761-.035 1.799-1.107.657-1.107Z"
          className="fill-gray-500"
        />
        <path
          d="m264.784 193.365-34.841 13.558 19.444 18.782a1.505 1.505 0 0 0 1.592.345l31.727-11.898c1.038-.38 1.314-1.729.553-2.525l-18.475-18.262Z"
          className="fill-gray-100"
        />
        <path
          d="m263.642 193.78-33.284 13.282 17.507 17.674c.38.381.934.519 1.418.311 4.394-1.729 8.754-3.424 13.148-5.153 2.664-1.038 5.293-2.076 7.958-3.113 2.594-1.003 6.227-2.248 5.916-5.742-.138-1.591-1.246-2.871-2.284-4.012-1.211-1.211-9.791-12.625-10.379-13.247Z"
          className="fill-gray-0"
        />
        <path
          d="M264.403 192.846c-10.172 3.943-20.344 7.92-30.516 11.864-1.453.553-2.906 1.141-4.359 1.694-.45.173-.623.692-.277 1.038 4.774 4.635 9.584 9.27 14.358 13.904 1.661 1.591 3.252 3.494 5.086 4.912 1.695 1.28 4.325-.277 6.055-.934 7.577-2.836 15.189-5.707 22.766-8.543 1.799-.692 3.806-1.211 5.501-2.075 3.321-1.661.069-4.255-1.384-5.708a6939.234 6939.234 0 0 1-16.157-16.014c-.554-.553-2.146.138-1.523.761 4.463 4.427 8.927 8.855 13.39 13.247a340.455 340.455 0 0 0 3.564 3.528c.449.45 1.176.934 1.522 1.488 1.211 1.971-3.149 2.767-4.325 3.216l-21.901 8.198c-1.28.484-2.595.968-3.875 1.452-.415.173-1.246.658-1.73.658-.553-.035-1.211-.9-1.591-1.246l-3.045-2.94-15.431-14.907c-.104.346-.173.692-.277 1.038 10.172-3.943 20.344-7.921 30.516-11.864 1.453-.554 2.906-1.142 4.36-1.695 1.072-.45.138-1.418-.727-1.072ZM219.01 232.484v16.533c0 .899 1.695.692 1.695-.104V232.38c0-.934-1.695-.692-1.695.104ZM219.01 252.545v2.594c0 .692 1.66.346 1.66-.207v-2.595c.035-.726-1.66-.38-1.66.208ZM219.01 258.148v6.78c0 .864 1.695.588 1.695-.139v-6.779c0-.865-1.695-.588-1.695.138Z"
          className="fill-gray-500"
        />
        <path
          d="M237.52 283.294c5.017-1.626 10.068-3.251 15.085-4.877 1.003-.311.726-1.453-.312-1.107-5.016 1.626-10.068 3.251-15.085 4.877-1.003.311-.726 1.453.312 1.107ZM237.485 277.31c5.017-1.626 9.999-3.286 15.016-4.911.969-.312.761-1.211-.242-.9-5.017 1.626-9.999 3.286-15.016 4.912-.969.346-.761 1.245.242.899ZM237.485 271.499c4.982-1.66 9.965-3.32 14.947-4.946.969-.311.796-1.107-.208-.761-4.982 1.66-9.964 3.321-14.946 4.946-.969.312-.796 1.107.207.761ZM237.52 287.825c1.107-.346 2.214-.726 3.321-1.072.346-.104.796-.415.658-.83-.104-.415-.658-.485-1.004-.381-1.107.346-2.214.726-3.321 1.072-.346.104-.796.415-.658.83.104.381.658.485 1.004.381ZM243.298 285.715c1.107-.346 2.249-.726 3.356-1.072.207-.069.83-.277.726-.588-.069-.311-.726-.208-.934-.139-1.107.346-2.249.727-3.356 1.073-.207.069-.83.276-.726.588.103.311.761.207.934.138ZM249.249 283.916c1.142-.345 2.249-.726 3.39-1.072.277-.069.796-.311.727-.692-.104-.345-.692-.311-.969-.242-1.142.346-2.249.727-3.39 1.073-.277.069-.796.311-.727.691.104.346.692.312.969.242Z"
          className="fill-gray-300"
        />
        <path
          d="M140.228 279.558c4.464-5.188 11.799-8.162 18.476-8.439 5.086-.208 10.207.968 14.67 3.389 1.73.934 4.048 2.491 5.19 3.632.553.554 2.145-.138 1.522-.761-3.529-3.562-8.65-5.811-13.459-6.848-8.13-1.799-16.642 0-23.458 4.773-1.557 1.072-3.114 2.317-4.325 3.77-.692.761.865 1.107 1.384.484ZM145.972 258.39c.311 1.419-.45 2.871-1.73 3.217-1.28.346-2.56-.484-2.906-1.902-.312-1.418.449-2.871 1.73-3.217 1.28-.346 2.56.484 2.906 1.902ZM176.557 262.61c1.318 0 2.387-1.192 2.387-2.663 0-1.471-1.069-2.663-2.387-2.663s-2.387 1.192-2.387 2.663c0 1.471 1.069 2.663 2.387 2.663ZM191.78 197.481c-7.646.933-15.88 1.937-23.181-1.246-6.055-2.628-11.106-8.197-10.691-15.149.415-7.229 5.674-12.867 12.041-15.669 7.023-3.113 15.119-3.458 22.593-1.902 3.563.726 7.853 1.799 10.829 4.012 2.491 1.868 3.46 5.154 1.072 7.471-1.764 1.695-4.394 2.456-6.677 3.113-2.422.657-4.844 1.28-7.3 1.695-12.56 2.179-26.78.104-36.64-8.509-4.879-4.289-8.269-10.584-8.304-17.19-.035-6.745 3.771-12.867 8.892-17.017 10.206-8.302 24.426-10.688 37.228-10.723 6.332-.034 12.663.519 18.891 1.522 3.321.519 6.816 1.038 9.895 2.491 3.114 1.487 6.262 4.565 5.432 8.335-.796 3.563-4.878 4.704-7.923 5.569-3.944 1.141-8.027 1.695-12.11 1.868-7.68.346-15.5-.242-23.146-1.176-7.197-.9-14.428-2.214-21.382-4.358-5.051-1.557-10.068-3.598-14.289-6.78-4.152-3.113-7.301-7.298-8.719-12.313-1.557-5.638-1.142-11.864.969-17.294 4.186-10.757 14.739-17.398 25.153-21.133 14.151-5.12 29.72-6.884 44.701-5.95 7.681.484 15.293 1.764 22.732 3.736 3.805 1.003 7.542 2.179 11.21 3.666 3.044 1.21 6.124 2.594 7.68 5.707 2.976 5.95-2.94 11.553-7.646 14.216-5.19 2.94-11.244 4.669-16.988 6.157-7.646 2.04-15.535 2.801-23.423 3.216-7.508.415-15.05.658-22.593.554-14.497-.242-29.374-2.076-42.487-8.613-11.383-5.707-22.593-17.294-19.756-31.164 1.349-6.537 6.228-12.21 11.279-16.36 5.225-4.289 11.314-7.332 17.646-9.615 13.043-4.704 27.09-6.33 40.861-7.126 15.396-.899 30.758-.172 45.947 2.456a203.362 203.362 0 0 1 22.662 5.327c.484.138 1.972-.588 1.349-.761-16.469-4.877-33.561-7.713-50.722-8.232-15.361-.45-31.138.588-46.189 3.7-13.666 2.837-27.99 7.887-37.574 18.505-4.705 5.223-7.923 11.587-7.162 18.747.727 6.918 4.394 13.178 9.411 17.848 11.21 10.411 27.644 14.25 42.452 15.53 7.958.692 15.95.692 23.908.45 8.477-.277 17.023-.554 25.43-1.868 7.058-1.107 13.978-3.044 20.656-5.534 5.397-2.006 11.106-4.877 14.047-10.066 1.522-2.628 1.868-5.603.311-8.3-1.661-2.906-4.532-4.29-7.508-5.5-7.542-3.078-15.604-5.12-23.665-6.399-16.366-2.594-33.25-1.695-49.269 2.525-11.694 3.113-24.115 8.336-31.173 18.712-6.609 9.719-6.989 23.866 1.349 32.686 3.944 4.151 9.169 6.848 14.497 8.785 6.608 2.422 13.597 3.909 20.552 4.981 8.407 1.314 17.057 2.041 25.568 1.937 3.944-.035 7.923-.346 11.798-1.141 3.391-.692 7.127-1.591 10.068-3.459 2.318-1.453 3.668-3.978 3.01-6.779-.795-3.252-3.805-5.396-6.746-6.572-3.218-1.28-6.747-1.764-10.172-2.283-3.356-.519-6.747-.865-10.138-1.107-13.528-.934-27.852.277-40.1 6.537-5.951 3.044-11.417 7.333-14.393 13.455-3.079 6.364-2.456 13.628 1.038 19.681 6.955 12.002 22.316 16.464 35.429 16.014 4.671-.138 30.689-2.802 24.358-12.728-1.903-3.01-6.124-4.186-9.342-5.119a44.107 44.107 0 0 0-11.002-1.834c-7.162-.276-14.808 1.176-20.898 5.119-5.57 3.598-9.757 9.789-9.134 16.672.623 6.814 6.297 11.829 12.421 14.043 7.3 2.628 15.327 1.66 22.835.761.761-.069 1.384-.969.242-.83Z"
          className="fill-gray-500"
        />
      </g>
    </svg>
  );
}

export function SearchNotFoundIcon({
  className = 'w-80 h-auto',
}: EmptySVGIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 350 350"
      {...(className && { className })}
    >
      <path
        d="M90.26 327.146C82.84 325.571-6.2 311.116.344 204.611 6.89 98.106 15.114 66.046 49.764 54.321c34.65-11.725 118.79-67.165 184.835-14.455 66.045 52.71 137.306 100.03 109.025 184.205-28.28 84.21-32.899 112.28-106.715 107.975-73.78-4.27-111.405 2.73-146.65-4.9Z"
        className="fill-gray-50"
      />
      <path
        d="M269.885 305.445c1.715-1.435 2.695-3.395 2.87-5.46.175-2.065-.42-4.2-1.82-5.88l-61.005-73.36c13.3-12.915 22.225-30.45 24.045-50.33 4.06-44.275-28.63-83.58-72.905-87.64-44.275-4.06-83.58 28.63-87.64 72.905-4.06 44.275 28.63 83.58 72.905 87.64 16.975 1.575 33.25-2.31 47.075-10.15l3.815-2.52 61.32 73.745c2.835 3.43 7.91 3.885 11.34 1.05ZM216.65 168.84c-3.185 34.72-34.02 60.34-68.705 57.155-34.72-3.185-60.34-34.02-57.155-68.705 3.185-34.685 33.985-60.375 68.67-57.19 34.72 3.22 60.375 34.02 57.19 68.74Z"
        className="fill-gray-200"
      />
      <path
        d="M82.628 124.845c-3.22 6.86-6.125 13.93-8.155 21.21-1.89 6.755-2.485 13.615-2.205 20.615.525 13.16 4.375 26.075 11.06 37.415 13.37 22.715 37.415 37.73 63.7 39.725 16.555 1.26 34.685-2.415 48.65-11.69.7-.455-.98-.315-1.295-.07-12.985 8.575-29.645 12.04-45.01 11.13-13.16-.805-26.04-4.865-37.24-11.83-21.35-13.23-35.665-36.26-37.905-61.32-.665-7.595-.385-15.26 1.505-22.645 2.03-7.875 5.11-15.505 8.575-22.82.14-.315-1.47-.175-1.68.28ZM198.098 232.997c7.945 9.554 15.89 19.074 23.835 28.629l32.865 39.48c.98 1.155 1.925 2.38 2.94 3.535 4.165 4.76 12.005 3.57 15.05-1.855.14-.245-1.435-.14-1.68.28-2.835 5.075-8.68 4.62-12.11.56-1.085-1.295-2.17-2.59-3.255-3.92-4.515-5.46-9.065-10.885-13.58-16.345-11.41-13.72-22.82-27.44-34.265-41.195-2.73-3.29-5.46-6.545-8.19-9.834-.28-.245-1.89.315-1.61.665ZM121.374 109.201c17.57-10.64 39.655-11.83 58.275-3.115 14.84 6.965 26.635 19.705 32.375 35.07 3.325 8.89 4.585 18.445 3.745 27.895-.035.28 1.645.07 1.68-.455 1.54-17.605-4.34-35.245-16.24-48.335-12.075-13.3-29.54-20.895-47.495-20.79-11.865.07-23.52 3.465-33.67 9.625-.665.455 1.015.315 1.33.105Z"
        className="fill-gray-500"
      />
      <path
        d="M274.187 299.39c1.715-1.435 2.695-3.395 2.87-5.46.175-2.065-.42-4.2-1.82-5.88l-61.005-73.36c13.3-12.915 22.225-30.45 24.045-50.33 4.06-44.275-28.63-83.58-72.905-87.64-44.31-4.06-83.615 28.665-87.675 72.905-4.06 44.275 28.63 83.615 72.905 87.675 16.975 1.575 33.25-2.31 47.075-10.15l3.815-2.52 61.32 73.745c2.835 3.395 7.945 3.85 11.375 1.015Zm-53.27-136.605c-3.185 34.72-34.02 60.34-68.705 57.155-34.685-3.185-60.34-34.02-57.155-68.705 3.185-34.685 34.02-60.34 68.705-57.155 34.685 3.185 60.34 33.985 57.155 68.705Z"
        className="fill-gray-0"
      />
      <path
        d="M274.893 299.601c3.71-3.29 3.955-8.47.84-12.25l-3.045-3.675c-4.62-5.53-9.205-11.095-13.825-16.625-11.795-14.175-23.555-28.315-35.35-42.49-2.835-3.395-5.67-6.825-8.505-10.22-.035.175-.07.385-.07.56 13.16-12.88 21.735-29.995 23.94-48.3 1.925-15.96-.98-32.27-8.33-46.585-7.035-13.685-17.92-25.235-31.15-33.04-13.65-8.05-29.61-11.865-45.43-11.06-15.505.77-30.695 6.125-43.33 15.155-12.565 8.96-22.505 21.49-28.28 35.84-5.985 14.875-7.42 31.5-4.06 47.18 3.255 15.19 10.955 29.295 21.945 40.285 11.025 11.06 25.2 18.795 40.46 22.05 18.76 3.99 38.64 1.225 55.545-7.805 2.03-1.085 3.885-2.345 5.81-3.64h-1.33c7.875 9.45 15.715 18.9 23.59 28.35 11.27 13.545 22.505 27.055 33.775 40.6 1.26 1.505 2.485 3.01 3.745 4.515 3.29 3.92 8.855 4.48 12.915 1.295.91-.7-.49-1.155-1.085-.665-3.605 2.835-7.84 1.575-10.57-1.68-1.155-1.4-2.345-2.8-3.5-4.235a5261.64 5261.64 0 0 1-14.245-17.115c-11.585-13.93-23.205-27.895-34.79-41.825-2.765-3.325-5.53-6.65-8.295-9.94-.315-.385-.98-.21-1.33 0-28.07 18.585-65.975 16.31-92.225-4.48-24.465-19.355-35.63-51.975-28.14-82.285 7.42-29.995 32.41-53.62 62.79-59.255 30.975-5.74 63.035 7.98 80.64 34.02 8.54 12.635 13.37 27.65 13.72 42.875.42 17.71-5.11 35.35-15.645 49.56-2.59 3.465-5.46 6.72-8.54 9.765-.14.14-.21.385-.07.56 7.385 8.89 14.805 17.78 22.19 26.705 11.13 13.37 22.26 26.775 33.39 40.145 1.54 1.82 3.045 3.675 4.585 5.495.28.315.525.63.805.945 2.66 3.395 2.275 7.945-.945 10.815-.77.7.875.91 1.4.455Z"
        className="fill-gray-500"
      />
      <path
        d="M220.078 162.856c-2.485 25.795-20.965 48.09-46.13 54.74-25.41 6.72-52.815-3.85-67.515-25.515-14.7-21.665-14.245-51.1 1.26-72.205 15.505-21.14 43.295-30.45 68.39-22.75 24.5 7.525 42.315 30.135 44.1 55.65.245 3.36.175 6.755-.105 10.08-.07.805 1.645.56 1.715-.14 2.345-26.67-12.6-52.605-36.995-63.7-24.185-11.025-53.34-5.635-72.135 13.125-19.11 19.04-24.15 49.035-12.11 73.22 11.9 23.905 38.115 38.15 64.68 35.07 26.005-3.045 48.265-22.19 54.81-47.6a65.287 65.287 0 0 0 1.75-10.08c.035-.84-1.68-.595-1.715.105Z"
        className="fill-gray-500"
      />
      <path
        opacity={0.5}
        d="M202.68 201.698c24.684-24.684 24.684-64.706 0-89.391-24.685-24.685-64.707-24.685-89.392 0-24.685 24.685-24.685 64.707 0 89.391 24.685 24.685 64.707 24.685 89.392 0Z"
        className="fill-gray-0"
      />
      <path
        d="M164.078 93.556c-26.39-2.31-52.29 12.075-63.84 36.015-11.69 24.22-6.51 53.9 12.6 72.765 19.04 18.795 48.65 23.66 72.73 12.075 24.045-11.55 38.85-37.38 36.155-63.98-2.66-26.32-22.225-48.79-47.845-55.23-3.22-.805-6.51-1.33-9.8-1.645-.7-.07-1.785.945-.63 1.05 25.76 2.45 47.88 21.07 54.705 46.06 6.895 25.235-3.08 52.815-24.5 67.83-21.595 15.12-51.1 14.665-72.345-.945-20.93-15.4-30.345-42.875-23.275-67.865 7.035-24.885 29.575-43.4 55.405-45.22 3.325-.245 6.685-.175 10.01.105.7.07 1.75-.91.63-1.015Z"
        className="fill-gray-500"
      />
      <path
        d="M180.251 173.637c-3.465-4.235-8.75-7.35-13.93-8.925-8.68-2.66-18.27-.945-25.795 3.99-1.75 1.155-3.535 2.45-4.935 4.025-.7.77.945.945 1.4.42 3.325-3.71 8.33-6.3 13.09-7.56 8.575-2.31 17.57-.315 24.605 5.04 1.435 1.085 2.87 2.31 4.025 3.71.42.56 2.03-.07 1.54-.7ZM138.912 148.086c0-1.75-1.4-3.185-3.15-3.185s-3.185 1.4-3.185 3.15 1.4 3.185 3.15 3.185 3.185-1.4 3.185-3.15ZM182.362 148.475a3.15 3.15 0 1 0-6.292-.336 3.15 3.15 0 0 0 6.292.336Z"
        className="fill-gray-500"
      />
      <path
        d="M124.593 168.52c2.532-.028 4.555-2.792 4.518-6.174-.037-3.383-2.119-6.102-4.651-6.075-2.532.028-4.555 2.792-4.518 6.174.037 3.383 2.119 6.102 4.651 6.075ZM190.356 167.783c2.532-.027 4.554-2.791 4.518-6.174-.037-3.382-2.119-6.102-4.651-6.074-2.532.027-4.555 2.791-4.518 6.174.036 3.382 2.119 6.102 4.651 6.074Z"
        className="fill-red"
      />
    </svg>
  );
}
