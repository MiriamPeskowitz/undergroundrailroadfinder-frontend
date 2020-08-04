— clone and see what I have so far. Make list of bugs and of features to build 
	-- error message about i18n-- keeping this here in case I get weird errors later 
	HEADS UP! i18n 1.1 changed fallbacks to exclude default locale.
But that may break your application.

If you are upgrading your Rails application from an older version of Rails:

Please check your Rails app for 'config.i18n.fallbacks = true'.
If you're using I18n (>= 1.1.0) and Rails (< 5.2.2), this should be
'config.i18n.fallbacks = [I18n.default_locale]'.
If not, fallbacks will be broken in your app by I18n 1.1.x.



— make new branch on both back and front. DONE

-- study group questions: devise? devise_jwt? adding

-- what doesn't work currently? 
	--feature: Save Note after you've written it

-- what's weird? 
	1. too many classes -- could have one class, with associations 
	2. needs a way to get back -- on each card, next to return to list/w/o saving. 
	
— make list of requirements or find it — that I still need to install 
— (AT SOME point, clean up my development/code folder, including all the project files 
— keeping my code for syllabus on other window. 

Next features: add more current sites of resistance activity: Octavius Catto statue; sites from the BLM protests in June and July + the encampment; the student protests in the 70s. Maybe there are blocks that are opened up once you complete each one, and it becomes a history of resistance. 







Older: 
1. create structure for OOJS
2. Now what? 
	-- all my methods are a mess. what do I need? 
		-- fetch the sites and render them on the page 
			-- works with console logs DONE 
			-- fetch sites WORKS
			-- got something to render on page WORKS
			-- next: work on getting exact card to render 
				-- make card DONE 
				-- attach card to div DONE!!!!

3. user sees images and names on a page, clicks to "Visit" and write about it, either in real life or by looking at the image. 
		-- add event listeners -- give button a class, and attach a click to the class, and where to go: 
		-- on that show page, show more data, and a place for the user to write a note. 


4. create users
	-- create sign up 
	-- create sign in 
	-- create sign out
	--create profile 
	-- create a way to see all your notes from your profile
	-- create a way to make all your notes into one piece, so you can edit. 


journey, curiosity, about statues, they're so entirely public, they mean a great deal, esp to those who put them up, but often we walk/drive/bike past them and barely notice them. They are often ignored.

What do we make of them, of these images, people from our history, living with us, as it were, taking up their position in our public space. 
I chose these sites and statues because they are about resistance, to finding a bit more space today than one had in the past, to being part of something larger than ourselves, each person a piece of a railroad, a piece of someone else's journey from enslavement to freedom. 


