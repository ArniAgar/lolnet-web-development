--------------------------------------------------------------------------------------
	HOW TO USE
--------------------------------------------------------------------------------------
Instructions on handling announce.txt to push announcements.

This is written in a custom BB code format.
It must follow this format to work;
[item]
	[heading]Announcement Heading[/heading]
    	[date]Announcement Date[/date]
	[announcement]Announcement Info[/announcement]
[/item]

This format must be followed for each person and added directly after the previous.
The [item] tag, and all others, must be closed - with the exception of [break].

The first headings that are written in are the first that are shown on the page
unless a sticky is defined on an [item] - see [item sticky] in the reference.

[item]
	[heading]Announcement Heading[/heading]
    	[date]Announcement Date[/date]
	[announcement]Announcement Info[/announcement]
[/item]
[item]
	[heading]Announcement Heading[/heading]
    	[date]Announcement Date[/date]
	[announcement]Announcement Info[/announcement]
[/item]

--------------------------------------------------------------------------------------
	REFERENCE LIST AND EXAMPLE
--------------------------------------------------------------------------------------
Extra BB code can be used. Extra code is as follows;

[b][/b] - defines bold text

[i][/i] - defines italic text

[u][/u] - defines underlined text

[s][/s] - defines strikethrough text

[url][/url] - defines a link. Insert the link URL in between the tags.

[image][/image] - defines an image. Insert the image URL in between the tags. Images
            will automatically be linked, ie, you do NOT need to use a [url] as well.
            
[break] - defines a line break (new line). Do not close this tag. Used to create a new
            paragraph or go down one line.
            
[item sticky] - adding the sticky attriubute to the [item] tag will make that
            particular item be sticky. The sticky items will appear at the top of the
            page before any other announcements.
            
This is an example of an announce.txt

[item]
	[heading]Announcement Heading[/heading]
    	[date]07.07.2015[/date]
	[announcement]Announcement[/announcement]
[/item]
[item sticky]
	[heading]New Website Release[/heading]
    	[date]07.07.2015[/date]
	[announcement]
        [u]There's[/u] [i]a[/i] [s]new[/s] [b]website[/b] hitting lolnet very soon. It
        comes packed with better server information and is all modern and shiney. Take
        a sneak peak at: [url]https://testwebsite.lolnet.co.nz[/url].
        [image]https://testwebsite.lolnet.co.nz/img/UI/Youtube-Icon-mobile.png[/image]
	[break]
        some text on a new line[break]
        some text on a new line
    [/announcement]
[/item]
[item]
	[heading]Announcement Heading[/heading]
    	[date]07.07.2015[/date]
	[announcement]Announcement[/announcement]
[/item]

--------------------------------------------------------------------------------------
	SUPPORT AND SOFTWARE LIMITATIONS
--------------------------------------------------------------------------------------
Only the shown tags are supported. No other BB code tags are supported. If others are 
inserted, the software will NOT work.

HTML code can work but has not been officially tested. It is recommended that only the
shown BB code be used as this does work and fulfills most situations.

--------------------------------------------------------------------------------------
	OTHER STUFF
--------------------------------------------------------------------------------------
This program is copyright, (c), to Thomas Eyles, 2015.