(() => {
  'use strict'
  chrome.runtime.onInstalled.addListener(() => {
    const axis = 3
    chrome.storage.sync.set({ axis })
  })
})()
