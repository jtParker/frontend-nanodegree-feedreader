
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('should have a URL', function() {
           for(let i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeTruthy();
           }
         });

         it('should have a name', function() {
           for(let i = 0; i < allFeeds.length; i++ ) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).toBeTruthy();
           }
         });
    });

    describe('The menu', function(){
      let bodyElem = $(document.body).get();
      let bodyClass = bodyElem[0].classList;

         it('should be hidden by default', function() {
           expect(bodyClass).toContain('menu-hidden');
         });

          it('should toggle the menu-hidden class when clicked', function() {
            let menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(bodyClass).not.toContain('menu-hidden');
            menuIcon.click();
            expect(bodyClass).toContain('menu-hidden');
          });
    });

    describe('Initial Entries', function() {

         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('should return at least one .entry', function(done) {
           let feed = $('.feed');
           let childCount = feed[0].childElementCount;
           loadFeed(0, function() {
             expect(childCount).toBeGreaterThan(0);
             done();
           });
         });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
      
    })

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
