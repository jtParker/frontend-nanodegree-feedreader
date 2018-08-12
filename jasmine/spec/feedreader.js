
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

// Test that all feeds have associated URLS

         it('should have a URL', function() {
           for(let i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeTruthy();
           }
         });

// Test that all feeds have a name

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

// Test the menu is hidden by default

         it('should be hidden by default', function() {
           expect(bodyClass).toContain('menu-hidden');
         });

// Test the menu toggles open and closed

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

// Test at least one article is shown in the feed

         it('should return at least one .entry', function(done) {
           let feed = $('.feed');
           let childCount = feed[0].childElementCount;
           loadFeed(0, function() {
             expect(childCount).toBeGreaterThan(0);
             done();
           });
         });

    });

    describe('New Feed Selection', function() {
      let prevFeed = $('.entry');

         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

// Test the content changes when a new feed is loaded

         it('should show new content when a new a new feed is loaded', function() {
           let newFeed = $('.entry');

           expect(prevFeed === newFeed).toBe(false);
         });
    });
}());
