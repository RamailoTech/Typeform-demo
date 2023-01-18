export const navigateNext = (visiblePageNumber,pageLength,setVisiblePageNumber,setDirection) => {
    if (visiblePageNumber < pageLength) {
      setVisiblePageNumber(visiblePageNumber + 1)
      setDirection(1)
      
    }
  }
export const navigatePrev = (visiblePageNumber,setVisiblePageNumber,setDirection) => {
    if (visiblePageNumber > 0) {
      setVisiblePageNumber(visiblePageNumber - 1)
      setDirection(-1)
    }
  }
