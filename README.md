# nazl-js
nazl (pronounced "nasal") is a simple browser sniffer created to detect a subset of the various modern browsers being used today.

##How is it used?##
All you have to do is initiate a new instance of `nazl` for the Nazl browser sniffer to be activated for the browser being worked. 

Once activated, the instance will report back an object with the following structure:

    {
      mobile: true/false,
      desktop: true/false,
      firefox: true/false,
      msie: true/false,
      chrome: true/false,
      safari: true/false,
      opera: true/false,
      unknown: true/false,
      fullName: string,
      version: decimal value
    }
       
