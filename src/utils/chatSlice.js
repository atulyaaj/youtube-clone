import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    isLiveChatVisible: true,
    isChatClosed: false,
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
    toggleLiveChat: (state) => {
      state.isLiveChatVisible = !state.isLiveChatVisible;
    },
    closeChat: (state) => {
      state.isChatClosed = true;
    },
    openChat: (state) => {
      state.isChatClosed = false;
      state.isLiveChatVisible = true;
    },
  },
});

export const { addMessages, toggleLiveChat, closeChat, openChat } =
  chatSlice.actions;
export default chatSlice.reducer;
