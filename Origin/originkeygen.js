var lines;
    var randomNumber;
    var lastRandomNumber;
    
    $(document.body).ready(function () {
      
      // load the keys from the server
      $.ajax({
        url: 'https://gist.github.com/jtrent238/8899915c13490e53a0aa1f38e86761f3/raw/49bf877c39be0a967637580d7b6c1284fb2295be/origin_keys.txt'
      }).done(function(content) {
        
        // normalize the line breaks, then split into lines
        lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
        
        // only set up the click handler if there were lines found
        if (lines && lines.length) {
          $('#showLine').on('click', function () {
            // loop to prevent repeating the last random number
            while (randomNumber === lastRandomNumber) {
              randomNumber = parseInt(Math.random() * lines.length);
              // check to prevent infinite loop
              if (lines.length === 1) { break; }
            }
            // keep track of the last random number
            lastRandomNumber = randomNumber;
            
            // show the corresponding line
            $('#keys').text(lines[randomNumber]);
          });
        }
      });
    });
