

// Set the visibility to 'hidden' or 'visible'.
      water_mains.hide = function() {
        if (this.div_) {
          // The visibility property must be a string enclosed in quotes.
          this.div_.style.visibility = 'hidden';
        }
      };

      water_mains.show = function() {
        if (this.div_) {
          this.div_.style.visibility = 'visible';
        }
      };

      water_mains.toggle = function() {
        if (this.div_) {
          if (this.div_.style.visibility === 'hidden') {
            this.show();
          } else {
            this.hide();
          }
        }
      };

