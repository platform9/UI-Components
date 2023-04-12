import React, { createContext, FC, useState } from 'react'

export interface IFrameContextRefs {
  sidebarPaneContainer: any
  headerTitleContainer: any
  headerPrimaryActionContainer: any
  headerSharedToolsContainer: any
}
export interface IFullFrameContext extends IFrameContextRefs {
  setFrameContainerRef: (payload: Partial<IFrameContextRefs>) => void
}

export const FrameContext = createContext({
  setFrameContainerRef: (payload) => {},
  sidebarPaneContainer: null,
  headerTitleContainer: null,
  headerPrimaryActionContainer: null,
  headerSharedToolsContainer: null,
})

export default FrameContext
