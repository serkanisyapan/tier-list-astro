import React from "react";
import ContentLoader from "react-content-loader";

export const TierContentLoader = (props) => (
  <ContentLoader
    speed={2}
    width={980}
    height={980}
    viewBox="0 0 980 980"
    backgroundColor="#6d6969"
    foregroundColor="#1e1e1f"
    {...props}
  >
    <rect x="54" y="66" rx="5" ry="5" width="71" height="92" />
    <rect x="137" y="67" rx="5" ry="5" width="984" height="92" />
    <rect x="54" y="179" rx="5" ry="5" width="71" height="92" />
    <rect x="137" y="180" rx="5" ry="5" width="984" height="92" />
    <rect x="54" y="292" rx="5" ry="5" width="71" height="92" />
    <rect x="137" y="293" rx="5" ry="5" width="984" height="92" />
    <rect x="54" y="405" rx="5" ry="5" width="71" height="92" />
    <rect x="137" y="406" rx="5" ry="5" width="984" height="92" />
    <rect x="54" y="518" rx="5" ry="5" width="71" height="92" />
    <rect x="137" y="519" rx="5" ry="5" width="984" height="92" />
  </ContentLoader>
);
