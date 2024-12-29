import React from "react";

const HtmlRenderer = ({ htmlContent }: { htmlContent: string }) => {
  return <span dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlRenderer;
