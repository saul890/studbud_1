class State {
    constructor(startTimestamp, difference, suspended) {
      this.startTimestamp = startTimestamp;
      this.difference = difference;
      this.suspended = suspended;
    }
  
    static ready() {
      return new State(null, 0, 0);
    }
  }
  
  class Stopwatch {
    constructor(state) {
      // Initial settings for the stopwatch
      document.getElementById("stop").style.display = "none";
      this.state = state;
      this.requestAnimationId = null;
      this.handleClickStart = this.handleClickStart.bind(this);
      document
        .getElementById("start")
        .addEventListener("click", this.handleClickStart);
      this.handleClickStop = this.handleClickStop.bind(this);
      document
        .getElementById("stop")
        .addEventListener("click", this.handleClickStop);
      this.handleClickReset = this.handleClickReset.bind(this);
      document
        .getElementById("reset")
        .addEventListener("click", this.handleClickReset);
      this.tick = this.tick.bind(this);
      this.render();
    }
  
    static ready() {
      return new Stopwatch(State.ready());
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.render();
    }
  
    tick() {
      this.setState({
        difference: new Date(new Date() - this.state.startTimestamp)
      });
      this.requestAnimationId = requestAnimationFrame(this.tick);
    }
  
    handleClickStart() {
      document.getElementById("start").style.display = "none";
      document.getElementById("stop").style.display = "block";
      if (this.state.startTimestamp) {
        // Prevent multi clicks on start
        return;
      }
      this.setState({
        startTimestamp: new Date() - this.state.suspended,
        suspended: 0
      });
      this.requestAnimationId = requestAnimationFrame(this.tick);
    }
    
    //When the user clicks on the pause button
    handleClickStop() {
      document.getElementById("stop").style.display = "none";
      document.getElementById("start").style.display = "block";
      // Stop the animation and display the time
      cancelAnimationFrame(this.requestAnimationId);
      this.setState({
        startTimestamp: null,
        suspended: this.state.difference
      });
    }

     //When the user clicks on the reset button
    handleClickReset() {
      // Stop the animation and reset the time
      cancelAnimationFrame(this.requestAnimationId);
      this.setState(State.ready());
    }
    
    // Calculate the time and display it as text content
    render() {
      const { difference } = this.state;
      const hundredths = (difference
        ? Math.floor(difference.getMilliseconds() / 10)
        : 0
      )
        .toString()
        .padStart(2, "0");
      const seconds = (difference ? Math.floor(difference.getSeconds()) : 0)
        .toString()
        .padStart(2, "0");
      const minutes = (difference ? Math.floor(difference.getMinutes()) : 0)
        .toString()
        .padStart(2, "0");
      // Render screen
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
      
    }
  }
  
  const STOPWATCH = Stopwatch.ready();

// Youtube tutorial https://www.youtube.com/watch?v=yhhFXNHKpsk