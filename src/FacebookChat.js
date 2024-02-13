import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";
const FacebookChat = () => {
  return (
    <FacebookProvider appId="262731936859346" chatSupport>
      <CustomChat pageId="100008229339895" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookChat;
