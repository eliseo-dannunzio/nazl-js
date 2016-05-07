var nazl = function(){
	// define "novelty" browser types
	var U=navigator.userAgent[S="toString"](),
	f=!!(~U[I="indexOf"]("Firefox")),
	i=(!!(~U[I]("MSIE")))||(!!(~U[I]("Trident/"))),
	c=!!(~U[I]("Chrome")),
	s=!!(~U[I]("Safari"))&&(!!(~U[I]("Version/"))),
	o=!!(~U[I]("OPR")),
	x=!!(~U[I]("CriOS")),
	m=!!(~U[I]("Opera Mini")),
	p=!!(~U[I]("iPhone;"));
	// Parity Check based on whether we're dealing with specific browsers
	if(o|m|f|s)c=!1;
	u=!(f|i|c|s|o|x|m);
	if(x)c=x;if(m)o=m;
	// Determine FullName value
	v=f?(U[M="match"](/Firefox\/\d+\.\d+/))[S]()[R="replace"]("/"," "):i?(U[M](/MSIE \d+\.\d+/) || "MSIE " + U[M](/rv:\d+/))[S]()[R]("rv:",""):c?(U[M](/Chrome\/\d+\.\d+/))[S]()[R]("/"," "):x?(U[M](/CriOS\/\d+\.\d+/))[S]()[R]("/"," "):s?"Safari" + (U[M](/Version\/\d+\.\d+/))[S]()[R]("Version/"," "):m?(U[M](/Opera Mini\/\d+\.\d+/))[S]()[R]("/"," "):o?"Opera" + (U[M](/OPR\/\d+\.\d+/))[S]()[R]("OPR/"," "):"Unknown 0";
	// Build object and return object
	var b = {mobile: p, desktop: !p, firefox: f, msie: i, chrome: c, safari: s, opera: o, unknown: u, fullName: v, version: +(v[R]("CriOS ","")[R]("Opera Mini ","")[R]("Firefox ","")[R]("MSIE ","")[R]("Chrome ","")[R]("Safari ","")[R]("Opera ",""))};
	return b;
}
