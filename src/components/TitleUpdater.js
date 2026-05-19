import React, {useEffect} from "react";

function TitleUpdater({pageTitle}) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle])
  return <></>
}

export default TitleUpdater;
