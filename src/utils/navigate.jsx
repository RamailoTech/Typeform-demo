export const navigateNext = (visiblePageNumber,pageLength,setVisiblePageNumber) => {
    if (visiblePageNumber < pageLength) {
      setVisiblePageNumber(visiblePageNumber + 1)
    }
  }
export const navigatePrev = (visiblePageNumber,setVisiblePageNumber) => {
    if (visiblePageNumber > 0) {
      setVisiblePageNumber(visiblePageNumber - 1)
    }
  }
