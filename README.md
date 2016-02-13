# Monthly Music Hackathon NYC's Website

This code is the next version of Monthly Music Hackathon NYC's website. It's currently live at [http://musichackathon.github.io/](http://musichackathon.github.io/). When it's ready for wider consumption, we can change DNS to point both monthlymusichackathon.org and musichack.org at musichackathon.github.io. These two URLs currently point to musichackathon.tumblr.com, a Tumblr Blog using a lightly modified default Tumblr theme.

## To Do

### Next Event

The first thing a user sees should be info about the next event we have scheduled.

* Event image
* name
* short desciption
* date/time
* location
* eventbrite RSVP button
* list of speakers
* links to more info: past events with the same theme, related hacks, articles, how to prepare, etc.

Ideally the text and URLs about the event should stored in a JSON file and rendered into an HTML template, so it's easy to add info about an event. We'll need to announce events before we have all the info about the event, so we should keep that in mind when designing this space.

We'll need a unique permalink for each event, so we can share URLs to info about a specific event.

### A flexible slot to highlight assorted things

This will usually be about the last event, or some other off-cycle content, like a blog post from one of the organizers or speakers or a link to a relevant article.

* A blog post (Just a pass through from our existing Tumblr Blog?)
* Photos
* Links to press
* Profile of a speaker, hacker, or project

### Future events

A list of upcoming events each with a subset of the pieces of info in the Next Event section, which will be filled in as we determine the details of each event.

### Index of Past Events and Hacks

[This](http://creativetime.org/projects/) kind of timeline index might be right for us. It would be nice be able to sort to see all the events or hacks on a single subject (eg, Music Visualization) together. This index can link out to dedicated pages for each event and hack, which we can gradually backfill over time.

### About, Mission, Principles, FAQ

- What is the event?
- Why does it exist?
- What are the events like? Potential attendees and press are always asking for accounts of what it's like to participate in the events. Maybe we could collect some articles and interviews and such.
- What is/are MMH's mission(s)
- What are our principles? What do we believe? Need to make a focused and refined version of [this doc](https://docs.google.com/document/d/1B-8zQ7I8nxfhkl8KtOU_4iPDRFFd1p9UJxBs2CtP7jA/edit#heading=h.lmnspyj9yy0)
- Who are the organizers?
- Misc FAQ

### Resources and Starter Kits

A page for whatever starter kit content the organizers come up with. Links to tools.

### Follow

Links to sign up for our mailing list, follow on twitter, like on facebook, instagram, etc, etc, etc

### Friends

Links to similar events and institutions we like: Dorkbot, Music Hack Day, Music Tech Fest, NIME, MusEdLab, LabRosa, MARL, ISMIR, etc

### Mobile

Make sure the mobile site works as well as the desktop version.
