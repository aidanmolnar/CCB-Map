var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var baseLayers = {
	'OpenStreetMap': osm,
};

var Draft_Other = L.layerGroup(); 
var Draft_SafeSpace = L.layerGroup(); 
var Draft_Kolsch = L.layerGroup(); 
var Cans_Other = L.layerGroup(); 
var Cans_SafeSpace = L.layerGroup(); 
var Cans_Kolsch = L.layerGroup(); 

var map = L.map('map', {
    center: [43.8, -71.5724],
    zoom: 8,
    layers: [osm , Draft_Other, Draft_SafeSpace, Draft_Kolsch, Cans_Other, Cans_SafeSpace, Cans_Kolsch]
});

var overlays = {  
    'Draft Other': Draft_Other,  
    'Draft Safe Space': Draft_SafeSpace,  
    'Draft Kolsch': Draft_Kolsch,  
    'Cans Other': Cans_Other,  
    'Cans Safe Space': Cans_SafeSpace,  
    'Cans Kolsch': Cans_Kolsch, 
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

map.on("overlayremove", function(o) {
    if (map.hasLayer(Draft_Other)) {
        map.removeLayer(Draft_Other);
        map.addLayer(Draft_Other);
    } 
    if (map.hasLayer(Draft_SafeSpace)) {
        map.removeLayer(Draft_SafeSpace);
        map.addLayer(Draft_SafeSpace);
    } 
    if (map.hasLayer(Draft_Kolsch)) {
        map.removeLayer(Draft_Kolsch);
        map.addLayer(Draft_Kolsch);
    } 
    if (map.hasLayer(Cans_Other)) {
        map.removeLayer(Cans_Other);
        map.addLayer(Cans_Other);
    } 
    if (map.hasLayer(Cans_SafeSpace)) {
        map.removeLayer(Cans_SafeSpace);
        map.addLayer(Cans_SafeSpace);
    } 
    if (map.hasLayer(Cans_Kolsch)) {
        map.removeLayer(Cans_Kolsch);
        map.addLayer(Cans_Kolsch);
    } 
    
});


marker0 = L.marker([43.026096, -71.079211]).addTo(Cans_SafeSpace).bindPopup("Market Basket Epping<br>24 Calef Hwy/Rte 125,Epping,03042<br>Safe Space Can<br>Last Updated 01-2024");
marker1 = L.marker([42.989281, -70.930754]).addTo(Cans_SafeSpace).bindPopup("Hannaford Exeter 8435<br>141 Portsmouth Avenue,Exeter,03833<br>Safe Space Can<br>Last Updated 01-2024");
marker2 = L.marker([43.038044, -71.161283]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Raymond 8120<br>2 Freetown Road,Raymond,03077<br>Safe Space Can<br>Last Updated 01-2024");
marker3 = L.marker([42.999169, -70.924122]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Stratham<br>27 Portsmouth Avenue,Stratham,03885<br>Safe Space Can<br>Last Updated 01-2024");
marker4 = L.marker([43.701287, -71.110447]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Ossipee 8159<br>891 Route 16,Ossipee,03864<br>Safe Space Can<br>Last Updated 01-2024");
marker6 = L.marker([44.025896, -71.114288]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Nrth Conway<br>80 Barns Road,North Conway,03860<br>Safe Space Can<br>Last Updated 01-2024");
marker7 = L.marker([43.167123, -70.894676]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Dover Grape8242<br>30 Grapevine Drive,Dover,03820<br>Safe Space Can<br>Last Updated 01-2024");
marker8 = L.marker([43.217150, -70.878327]).addTo(Cans_SafeSpace).bindPopup("Hannaford Dovcentral 8373<br>833 Central Avenue,Dover,03820<br>Safe Space Can<br>Last Updated 01-2024");
marker9 = L.marker([43.195799, -71.151629]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Northwood 8160<br>174 First Nh Turnpike,Northwood,03261<br>Safe Space Can<br>Last Updated 01-2024");
marker11 = L.marker([43.309765, -70.994244]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Roch/N.main8315<br>290 North Main Street,Rochester,03867<br>Safe Space Can<br>Last Updated 01-2024");
marker12 = L.marker([43.331579, -71.010961]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Roch New<br>120 Marketplace Blvd.,Rochester,03867<br>Safe Space Can<br>Last Updated 01-2024");
marker13 = L.marker([43.068156, -70.771207]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Portsmouth8149<br>800 Islington Street,Portsmouth,03801<br>Safe Space Can<br>Last Updated 01-2024");
marker14 = L.marker([43.045038, -70.774284]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Lafayette<br>1500 Lafayette Road,Portsmouth,03801<br>Safe Space Can<br>Last Updated 01-2024");
marker15 = L.marker([43.087240, -70.789999]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Woodbury<br>1464 Woodbury Avenue,Portsmouth,03801<br>Safe Space Can<br>Last Updated 01-2024");
marker17 = L.marker([42.887443, -70.870340]).addTo(Cans_SafeSpace).bindPopup("Demoulas - Seabrook<br>380 Lafayette Road,Seabrook,03874<br>Safe Space Can<br>Last Updated 01-2024");
marker18 = L.marker([42.946079, -70.835872]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Hannaford/Hampton   8319<br>630 Lafayette Road,Hampton,03842<br>Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker19 = L.marker([43.033100, -71.455000]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Hooksett  8177<br>79 Bicentennial Drive,Hooksett,03106<br>Safe Space Can<br>Last Updated 01-2024");
marker20 = L.marker([43.055638, -71.443573]).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Shaws  Hooksett  4486<br>1328 Hooksett Road,Hooksett,03106<br>Safe Space Can, Gov’nah Can<br>Last Updated 01-2024");
marker21 = L.marker([42.957734, -71.441625]).addTo(Cans_SafeSpace).bindPopup("Hannaford Man Devine 8164<br>201 John E Devine Dr,Manchester,03103<br>Safe Space Can<br>Last Updated 01-2024");
marker22 = L.marker([42.983919, -71.464627]).addTo(Cans_SafeSpace).bindPopup("Market Basket - Elm St<br>460 Elm Street,Manchester,03101<br>Safe Space Can<br>Last Updated 01-2024");
marker23 = L.marker([42.984885, -71.428267]).addTo(Cans_SafeSpace).bindPopup("Hannaford Man Hanov 8178<br>859 Hanover Street,Manchester,03104<br>Safe Space Can<br>Last Updated 01-2024");
marker24 = L.marker([43.222144, -71.489765]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Shaws-Loudon Rd 0811<br>20 D'Amante Drive,Concord,03301<br>Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker25 = L.marker([43.043971, -71.468773]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Hooksett<br>10 Market Drive,Hooksett,03106<br>Safe Space Can<br>Last Updated 01-2024");
marker26 = L.marker([43.561705, -71.444131]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Gilford 8402<br>1425 Lakeshore Road,Gilford,03249<br>Safe Space Can<br>Last Updated 01-2024");
marker27 = L.marker([43.449097, -71.623855]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Franklin 8318<br>952 Central Street,Franklin,03235<br>Safe Space Can<br>Last Updated 01-2024");
marker28 = L.marker([43.452252, -71.572610]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Tilton<br>29 East Main Street,Tilton,03276<br>Safe Space Can<br>Last Updated 01-2024");
marker29 = L.marker([43.212885, -71.532891]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Hannaford/Concord   8329<br>73 Fort Eddy Road,Concord,03301<br>Four Rivers Red Can, Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker30 = L.marker([43.215318, -71.529947]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Fort Eddy<br>108 Fort Eddy Road,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker31 = L.marker([43.289001, -71.578101]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Penacook<br>15 Merchants Way,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker32 = L.marker([43.202431, -71.532058]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Capitol<br>50 Storrs Street,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker33 = L.marker([43.584382, -71.749946]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Bristol 8441<br>505 Pleasant Street,Bristol,03222<br>Safe Space Can<br>Last Updated 01-2024");
marker34 = L.marker([43.772077, -71.723432]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Plymouth<br>34 Ridge View Lane,Plymouth,03264<br>Safe Space Can<br>Last Updated 01-2024");
marker35 = L.marker([43.768633, -71.716734]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Plymouth 8248<br>389 Tenney Mountain Hwy,Plymouth,03264<br>Safe Space Can<br>Last Updated 01-2024");
marker36 = L.marker([43.660960, -71.497731]).addTo(Cans_SafeSpace).bindPopup("Hannaford/Meredith 8253<br>38 Nh Rte 25 Unit 5,Meredith,03253<br>Safe Space Can<br>Last Updated 01-2024");
marker38 = L.marker([43.078889, -70.756071]).addTo(Cans_Other).bindPopup("Surf Portsmouth Inc<br>99 Bow Street,Portsmouth,03801<br>Four Rivers Red Can<br>Last Updated 01-2024");
marker39 = L.marker([43.195178, -70.874839]).addTo(Draft_Other).bindPopup("Thirsty Moose-Dover<br>83 Washington Street,Dover,03820<br>Pond Hockey Pilsner Draft<br>Last Updated 01-2024");
marker42 = L.marker([42.938737, -70.839217]).addTo(Cans_SafeSpace).bindPopup("Las Olas Taqueria<br>356 Lafayette Road,Hampton,03842<br>Safe Space Can<br>Last Updated 01-2024");
marker43 = L.marker([42.952219, -70.831738]).addTo(Draft_Other).bindPopup("Community Oven-Hampton<br>845 Lafayette Road,Hampton,03842<br>Apple Crisp Porter Draft<br>Last Updated 01-2024");
marker45 = L.marker([43.133795, -70.919803]).addTo(Cans_SafeSpace).bindPopup("Gibbs  - Durham<br>7 Dover Road,Durham,03824<br>Safe Space Can<br>Last Updated 01-2024");
marker46 = L.marker([43.071420, -70.770417]).addTo(Cans_SafeSpace).bindPopup("Dmart<br>565 Islington St,Portsmouth,03801<br>Safe Space Can<br>Last Updated 01-2024");
marker49 = L.marker([43.213214, -70.997077]).addTo(Cans_Other).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Calefs Country Store<br>606 Franklin Pierce Road,Barrington,03825<br>Gov’nah Can, Town Pound Porter Can, Double Safe Space Can, Safe Space Can<br>Last Updated 01-2024");
marker50 = L.marker([43.148253, -71.007501]).addTo(Cans_SafeSpace).bindPopup("Qwik Stop Lee<br>100 Calef Hwy/Route 125,Lee,03861<br>Safe Space Can<br>Last Updated 01-2024");
marker51 = L.marker([43.192744, -70.872777]).addTo(Cans_Other).bindPopup("Downtown Discount Bev.<br>257 Central Avenue,Dover,03820<br>Lucky 7s Ipa Can<br>Last Updated 01-2024");
marker52 = L.marker([43.195474, -70.871460]).addTo(Cans_SafeSpace).bindPopup("Smileys Beverage<br>7 Main Street,Dover,03820<br>Safe Space Can<br>Last Updated 01-2024");
marker55 = L.marker([42.895634, -70.885526]).addTo(Cans_SafeSpace).bindPopup("Rt 107 Beverages<br>1 Batchelder Road,Seabrook,03874<br>Safe Space Can<br>Last Updated 01-2024");
marker56 = L.marker([42.893194, -70.874379]).addTo(Cans_SafeSpace).bindPopup("The City Seabrook<br>621 Lafayette Road,Seabrook,03874<br>Safe Space Can<br>Last Updated 01-2024");
marker57 = L.marker([43.036156, -70.784958]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Mckinnons Market & Shop<br>2454 Lafayette Road,Portsmouth,03801<br>Senatah Can, Safe Space Can<br>Last Updated 01-2024");
marker58 = L.marker([42.879312, -70.869270]).addTo(Cans_SafeSpace).bindPopup("The City Tobacco & Bev 4<br>167 Lafayette Road,Seabrook,03874<br>Safe Space Can<br>Last Updated 01-2024");
marker59 = L.marker([43.328962, -70.948132]).addTo(Cans_SafeSpace).bindPopup("Discount Borderline Bev<br>58 Highland Street,East Rochester,03867<br>Safe Space Can<br>Last Updated 01-2024");
marker60 = L.marker([43.296367, -70.992503]).addTo(Cans_SafeSpace).bindPopup("Nouria/Washington St<br>130 Washington Street,Rochester,03867<br>Safe Space Can<br>Last Updated 01-2024");
marker61 = L.marker([43.306233, -70.972652]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("The City Rochester<br>17 Signal Street,Rochester,03867<br>Senatah Can, Safe Space Can<br>Last Updated 01-2024");
marker64 = L.marker([43.579441, -71.198072]).addTo(Draft_SafeSpace).addTo(Cans_Other).bindPopup("Morrisseys Front Porch<br>286 South Main Street,Wolfeboro,03894<br>Safe Space Draft, Town Pound Porter Can<br>Last Updated 01-2024");
marker65 = L.marker([43.505257, -71.223792]).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).bindPopup("East Alton General<br>793 East Side Dr,Alton,03809<br>Double Safe Space Can, Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker66 = L.marker([43.500604, -70.962969]).addTo(Draft_SafeSpace).addTo(Cans_Other).bindPopup("Ira Millers General Sto<br>48 Milton Mills,Milton Mills,03852<br>Safe Space Draft, Gov’nah Can<br>Last Updated 01-2024");
marker67 = L.marker([43.333826, -71.007292]).addTo(Cans_SafeSpace).bindPopup("Nouria/Farmington Road<br>95 Farmington Road,Rochester,03867<br>Safe Space Can<br>Last Updated 01-2024");
marker68 = L.marker([43.586642, -71.207151]).addTo(Cans_SafeSpace).bindPopup("Harvest Mkt Of Wolfeboro<br>36 Center Street,Wolfeboro,03896<br>Safe Space Can<br>Last Updated 01-2024");
marker69 = L.marker([43.389761, -71.065062]).addTo(Cans_SafeSpace).bindPopup("Crowleys Variety & Grill<br>52 South Main Street,Farmington,03835<br>Safe Space Can<br>Last Updated 01-2024");
marker70 = L.marker([43.417637, -71.295727]).addTo(Cans_SafeSpace).bindPopup("Iron Works Market<br>1818 Nh Route 140,Gilmanton,03837<br>Safe Space Can<br>Last Updated 01-2024");
marker71 = L.marker([43.584800, -71.215289]).addTo(Draft_SafeSpace).bindPopup("Beveridge Craft/Rest<br>51 North Main Street,Wolfeboro,03894<br>Safe Space Draft<br>Last Updated 01-2024");
marker72 = L.marker([43.584564, -71.207917]).addTo(Cans_SafeSpace).bindPopup("Wolfeboro Corner Country<br>148 South Main Street,Wolfeboro,03894<br>Safe Space Can<br>Last Updated 01-2024");
marker73 = L.marker([43.587389, -71.215733]).addTo(Cans_SafeSpace).bindPopup("Studio18 Golf Llc<br>1 Bay Street,Wolfeboro,03894<br>Safe Space Can<br>Last Updated 01-2024");
marker80 = L.marker([45.051603, -71.386088]).addTo(Draft_SafeSpace).bindPopup("1840 Restaurant<br>8 Back Lake Road,Pittsburg,03592<br>Safe Space Draft<br>Last Updated 01-2024");
marker81 = L.marker([44.896447, -71.495458]).addTo(Draft_SafeSpace).bindPopup("Black Bear Tavern<br>151 Main Street,Colebrook,03576<br>Safe Space Draft<br>Last Updated 01-2024");
marker82 = L.marker([44.308577, -71.796269]).addTo(Cans_SafeSpace).bindPopup("Maplefields Littleton #64<br>390 Meadow Street,Littleton,03561<br>Safe Space Can<br>Last Updated 01-2024");
marker83 = L.marker([44.307868, -71.754034]).addTo(Cans_SafeSpace).bindPopup("Simons Market-Littleton<br>456 Union St,Littleton,03561<br>Safe Space Can<br>Last Updated 01-2024");
marker84 = L.marker([44.599276, -71.513144]).addTo(Cans_SafeSpace).bindPopup("North Country Shop & Save<br>25 State Street,Groveton,03582<br>Safe Space Can<br>Last Updated 01-2024");
marker85 = L.marker([44.493718, -71.572591]).addTo(Draft_Other).addTo(Draft_SafeSpace).bindPopup("Scorpios Pizza & Sports<br>180 Main Street,Lancaster,03584<br>Four Rivers Red Draft, Safe Space Draft<br>Last Updated 01-2024");
marker87 = L.marker([43.814784, -71.192074]).addTo(Cans_SafeSpace).bindPopup("Kevins Discount Center<br>2255 Route 16,West Ossipee,03890<br>Safe Space Can<br>Last Updated 01-2024");
marker88 = L.marker([43.554107, -71.028845]).addTo(Cans_Other).bindPopup("Lovell Lake Village Mkt<br>66 Meadow Street,Sanbornville,03872<br>Pandora's Kettle Sour Can<br>Last Updated 01-2024");
marker89 = L.marker([44.055821, -71.130566]).addTo(Cans_SafeSpace).bindPopup("Cobble Pond Farms<br>2806 White Mtn Hwy,North Conway,03860<br>Safe Space Can<br>Last Updated 01-2024");
marker91 = L.marker([43.819691, -71.202558]).addTo(Cans_SafeSpace).bindPopup("Watsons General Store<br>2345 White Mountain Hwy,West Ossipee,03890<br>Safe Space Can<br>Last Updated 01-2024");
marker95 = L.marker([44.076411, -71.138344]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Vista Beverage<br>10 Hurricane Mtn Road,Intervale,03845<br>Live Light Lager Can, Safe Space Can, Coffee Stout Can<br>Last Updated 01-2024");
marker96 = L.marker([44.128492, -71.190031]).addTo(Cans_SafeSpace).bindPopup("Mcsheffreys Up North<br>7 Glen Ledge Road,Glen,03838<br>Safe Space Can<br>Last Updated 01-2024");
marker97 = L.marker([44.148551, -71.179046]).addTo(Cans_SafeSpace).bindPopup("J Town Deli Llc<br>174 Main St,Jackson,03846<br>Safe Space Can<br>Last Updated 01-2024");
marker98 = L.marker([44.015923, -71.110022]).addTo(Cans_SafeSpace).bindPopup("Mdk Discount Beverage<br>1130 Eastman Road,North Conway,03860<br>Safe Space Can<br>Last Updated 01-2024");
marker99 = L.marker([44.024078, -71.114132]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Beer And Wine Nation<br>2 Common Court Unit,North Conway,03860<br>Senatah Can, Double Safe Space Can, Safe Space Can<br>Last Updated 01-2024");
marker100 = L.marker([44.035176, -71.121316]).addTo(Cans_SafeSpace).bindPopup("North Conway Mart<br>2039 White Mt. Highway,North Conway,03860<br>Safe Space Can<br>Last Updated 01-2024");
marker102 = L.marker([44.055456, -71.131026]).addTo(Cans_SafeSpace).bindPopup("Flatbread Co/No Conway<br>2760 White Mtn Hwy Po2475,North Conway,03860<br>Safe Space Can<br>Last Updated 01-2024");
marker103 = L.marker([44.111888, -71.181095]).addTo(Cans_Kolsch).addTo(Cans_SafeSpace).bindPopup("Glen Beverage Company<br>779 Nh 16,Glen,03838<br>Kapitol Kolsch Can, Safe Space Can<br>Last Updated 01-2024");
marker106 = L.marker([44.034968, -71.120641]).addTo(Cans_SafeSpace).bindPopup("The O Club<br>2025 White Mtn Hwy,North Conway,03860<br>Safe Space Can<br>Last Updated 01-2024");
marker108 = L.marker([44.397701, -71.598655]).addTo(Draft_SafeSpace).bindPopup("Inn At Whitefield<br>381 Lancaster Road,Whitefield,03598<br>Safe Space Draft<br>Last Updated 01-2024");
marker109 = L.marker([44.252003, -71.444755]).addTo(Cans_Other).bindPopup("Top O Quad Restaurant<br>Route 302,Bretton Woods,03575<br>Gov’nah Can<br>Last Updated 01-2024");
marker110 = L.marker([44.264554, -71.459884]).addTo(Cans_SafeSpace).bindPopup("Bretton Woods Market & De<br>2267 Route 302 West,Bretton Woods,03595<br>Safe Space Can<br>Last Updated 01-2024");
marker117 = L.marker([43.042199, -71.305076]).addTo(Cans_SafeSpace).bindPopup("Candia First Stoppe<br>285 Old Candia Road,Candia,03034<br>Safe Space Can<br>Last Updated 01-2024");
marker118 = L.marker([43.023441, -71.364299]).addTo(Draft_SafeSpace).bindPopup("Auburn Tavern Llc<br>346 Hooksett Road,Auburn,03032<br>Safe Space Draft<br>Last Updated 01-2024");
marker119 = L.marker([42.981596, -70.958070]).addTo(Cans_Other).bindPopup("Gerrys Variety<br>66 Lincoln Street,Exeter,03833<br>Four Rivers Red Can<br>Last Updated 01-2024");
marker120 = L.marker([43.004103, -71.347505]).addTo(Cans_SafeSpace).bindPopup("Auburn Supermarket<br>9 Chester Road,Auburn,03032<br>Safe Space Can<br>Last Updated 01-2024");
marker121 = L.marker([43.040391, -71.169800]).addTo(Cans_SafeSpace).bindPopup("Mr Gas<br>62 Epping St,Raymond,03077<br>Safe Space Can<br>Last Updated 01-2024");
marker122 = L.marker([42.948227, -71.350196]).addTo(Cans_SafeSpace).bindPopup("Nouria Auburn<br>903 Londonderry Turnpike,Auburn,03032<br>Safe Space Can<br>Last Updated 01-2024");
marker123 = L.marker([42.956609, -71.256656]).addTo(Cans_Other).bindPopup("Chester General Store<br>2 Haverhill Road,Chester,03036<br>Gov’nah Can<br>Last Updated 01-2024");
marker125 = L.marker([43.034150, -71.073060]).addTo(Cans_Other).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Greg & Janes Beer & Wine<br>63 Main Street,Epping,03042<br>Lucky 7s Ipa Can, Senatah Can, Safe Space Can, Double Safe Space Can<br>Last Updated 01-2024");
marker130 = L.marker([43.011269, -71.479516]).addTo(Cans_SafeSpace).bindPopup("Jon Os Market<br>600 Front Street,Manchester,03102<br>Safe Space Can<br>Last Updated 01-2024");
marker131 = L.marker([42.972005, -71.455655]).addTo(Cans_SafeSpace).bindPopup("Fast Track Convenience<br>136 South Willow Street,Manchester,03103<br>Safe Space Can<br>Last Updated 01-2024");
marker132 = L.marker([42.980694, -71.483899]).addTo(Cans_SafeSpace).bindPopup("Varney Street Quick Stop<br>323 Varney Street,Manchester,03102<br>Safe Space Can<br>Last Updated 01-2024");
marker133 = L.marker([42.980131, -71.491968]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Everest Convenience Store<br>18 Rockland Avenue,Manchester,03102<br>Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker134 = L.marker([42.976667, -71.444663]).addTo(Cans_SafeSpace).bindPopup("Gosselins Superette Inc<br>710 Somerville St.,Manchester,03103<br>Safe Space Can<br>Last Updated 01-2024");
marker135 = L.marker([42.974796, -71.476409]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).bindPopup("The Packie Llc<br>581 Second Street,Manchester,03104<br>Town Pound Porter Can, Lucky 7s Ipa Can, Gov’nah Can, Safe Space Can, Four Rivers Red Can, Pond Hockey Pilsner Can<br>Last Updated 01-2024");
marker136 = L.marker([42.942952, -71.452223]).addTo(Cans_SafeSpace).bindPopup("Alltown Fresh Brown Ave<br>2391 Brown Avenue,Manchester,031036813<br>Safe Space Can<br>Last Updated 01-2024");
marker143 = L.marker([42.984974, -71.413354]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Candia Road Convenience<br>836 Candia Rd,Manchester,03109<br>Senatah Can, Safe Space Can<br>Last Updated 01-2024");
marker144 = L.marker([42.996951, -71.464048]).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Rk North End Superette<br>1308 Elm St.,Manchester,03101<br>Coffee Stout Can, Safe Space Can<br>Last Updated 01-2024");
marker145 = L.marker([43.008151, -71.395264]).addTo(Cans_SafeSpace).bindPopup("Manchester Fuel Inc.<br>219 Londonderry Turnpike,Manchester,03104<br>Safe Space Can<br>Last Updated 01-2024");
marker146 = L.marker([42.986327, -71.463539]).addTo(Cans_SafeSpace).bindPopup("Quality Fuel Mart<br>570 Elm Street,Manchester,03103<br>Safe Space Can<br>Last Updated 01-2024");
marker147 = L.marker([42.981023, -71.432012]).addTo(Cans_SafeSpace).bindPopup("Heavens East Side Mart<br>234 Mammoth Road,Manchester,03109<br>Safe Space Can<br>Last Updated 01-2024");
marker148 = L.marker([43.006556, -71.461429]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Bunnys Superette<br>75 Webster St,Manchester,03104<br>Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker149 = L.marker([42.987135, -71.417482]).addTo(Cans_SafeSpace).bindPopup("Kwik Stop/Hanover St<br>1095 Hanover Street,Manchester,03104<br>Safe Space Can<br>Last Updated 01-2024");
marker158 = L.marker([43.015123, -71.450441]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Berts Beer & Wine<br>545 Hooksett Road Unit 16,Manchester,03106<br>Senatah Can, Safe Space Can<br>Last Updated 01-2024");
marker159 = L.marker([42.990595, -71.465232]).addTo(Draft_SafeSpace).bindPopup("Strange Brew Tavern<br>88 Market St.,Manchester,03101<br>Safe Space Draft<br>Last Updated 01-2024");
marker160 = L.marker([42.989573, -71.462635]).addTo(Draft_SafeSpace).bindPopup("Thirsty Moose/Manchester<br>795 Elm Street Unit 101,Manchester,03101<br>Safe Space Draft<br>Last Updated 01-2024");
marker161 = L.marker([42.979071, -71.471215]).addTo(Draft_SafeSpace).bindPopup("Raphaels Social Club Inc<br>18 Blaine Street,Manchester,03102<br>Safe Space Draft<br>Last Updated 01-2024");
marker162 = L.marker([42.993786, -71.467192]).addTo(Cans_SafeSpace).bindPopup("Tru Hotel<br>451 Commercial Street,Manchester,03101<br>Safe Space Can<br>Last Updated 01-2024");
marker163 = L.marker([42.968103, -71.451645]).addTo(Cans_SafeSpace).bindPopup("The Rugged Axe<br>377 South Willow Street,Manchester,03103<br>Safe Space Can<br>Last Updated 01-2024");
marker164 = L.marker([42.991883, -71.463435]).addTo(Cans_SafeSpace).bindPopup("Castros Backroom Iii,Inc<br>972 Elm Street,Manchester,03101<br>Safe Space Can<br>Last Updated 01-2024");
marker165 = L.marker([42.991239, -71.462727]).addTo(Cans_SafeSpace).bindPopup("Shaskeen (The)<br>909 Elm Street,Manchester,03101<br>Safe Space Can<br>Last Updated 01-2024");
marker166 = L.marker([42.991116, -71.462635]).addTo(Draft_Other).bindPopup("City Hall Pub<br>889 Elm Street,Manchester,03101<br>Gov’nah Draft<br>Last Updated 01-2024");
marker169 = L.marker([42.992905, -71.462307]).addTo(Draft_SafeSpace).bindPopup("Firefly American Bistro<br>22 Concord Street,Manchester,03101<br>Safe Space Draft<br>Last Updated 01-2024");
marker170 = L.marker([42.986837, -71.468896]).addTo(Draft_Other).bindPopup("Foundry Restaurant Llc<br>50 Phillipee Cote Street,Manchester,03101<br>Gov’nah Draft<br>Last Updated 01-2024");
marker176 = L.marker([44.302804, -71.801481]).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Shaws-Littleton 2601<br>625 Meadow Street,Littleton,03561<br>Safe Space Can, Gov’nah Can<br>Last Updated 01-2024");
marker180 = L.marker([43.758062, -71.687299]).addTo(Cans_Other).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Chase Street Market<br>83 Main Street,Plymouth,03264<br>Coffee Stout Can, Safe Space Can, Apple Crisp Porter Can<br>Last Updated 01-2024");
marker181 = L.marker([43.806334, -71.438427]).addTo(Draft_SafeSpace).bindPopup("The Foot Hills Cafe<br>25 Main Street,Sandwich,03259<br>Safe Space Draft<br>Last Updated 01-2024");
marker182 = L.marker([43.731216, -71.591982]).addTo(Cans_SafeSpace).bindPopup("Our Golden Pond Cty Store<br>Route 3,Holderness,03245<br>Safe Space Can<br>Last Updated 01-2024");
marker183 = L.marker([43.710266, -71.461844]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("E.m. Heath, Inc.<br>12c Main Street,Center Harbor,03226<br>Pond Hockey Pilsner Can, Safe Space Can<br>Last Updated 01-2024");
marker184 = L.marker([43.745478, -71.359911]).addTo(Cans_SafeSpace).bindPopup("Skelleys Market<br>374 Gov Wentworth,Moultonborough,03254<br>Safe Space Can<br>Last Updated 01-2024");
marker188 = L.marker([43.720497, -71.431668]).addTo(Cans_Other).bindPopup("Aloha Moultonborough<br>14 Moultonboro Neck Road,Moultonborough,03254<br>Pandora's Kettle Sour Can<br>Last Updated 01-2024");
marker190 = L.marker([43.709112, -71.654820]).addTo(Cans_Other).bindPopup("#Bobs Shurfine Market<br>25 Main Street,Ashland,03217<br>Town Pound Porter Can<br>Last Updated 01-2024");
marker192 = L.marker([43.444813, -71.644043]).addTo(Cans_SafeSpace).bindPopup("Shop Express<br>449 Central Ave,Franklin,03235<br>Safe Space Can<br>Last Updated 01-2024");
marker193 = L.marker([43.434194, -71.592656]).addTo(Cans_SafeSpace).bindPopup("Park & Go Markets,Inc.<br>135 Park Street,Northfield,03276<br>Safe Space Can<br>Last Updated 01-2024");
marker194 = L.marker([43.442456, -71.660000]).addTo(Cans_SafeSpace).bindPopup("Fff Mart<br>80 North Main Street,West Franklin,03235<br>Safe Space Can<br>Last Updated 01-2024");
marker195 = L.marker([43.455874, -71.660035]).addTo(Cans_SafeSpace).bindPopup("Roberts Market<br>2 Hill Road,West Franklin,03235<br>Safe Space Can<br>Last Updated 01-2024");
marker196 = L.marker([43.593327, -71.743086]).addTo(Cans_SafeSpace).bindPopup("Park & Go Markets Inc<br>101 Lake Street,Bristol,03222<br>Safe Space Can<br>Last Updated 01-2024");
marker197 = L.marker([43.443551, -71.592366]).addTo(Cans_SafeSpace).bindPopup("Tilton Food Mart<br>311 Main Street,Tilton,03276<br>Safe Space Can<br>Last Updated 01-2024");
marker198 = L.marker([43.616135, -71.637766]).addTo(Cans_SafeSpace).bindPopup("Energy North #2224<br>309 Route 104,New Hampton,03256<br>Safe Space Can<br>Last Updated 01-2024");
marker204 = L.marker([43.446877, -71.619915]).addTo(Draft_SafeSpace).bindPopup("Smittys Cinema<br>630 West Main Street,Tilton,03276<br>Safe Space Draft<br>Last Updated 01-2024");
marker205 = L.marker([43.771679, -71.725174]).addTo(Cans_SafeSpace).bindPopup("C-Man Roadside Plymouth<br>484 Tenney Mtn. Highway,Plymouth,03264<br>Safe Space Can<br>Last Updated 01-2024");
marker206 = L.marker([44.056510, -71.627763]).addTo(Draft_SafeSpace).bindPopup("Mountain Club On Loon<br>90 Loon Mtn Road,Lincoln,03251<br>Safe Space Draft<br>Last Updated 01-2024");
marker207 = L.marker([44.210370, -71.788141]).addTo(Draft_Other).bindPopup("Inn At Sunset Hill<br>231 Sunset Hill Road,Sugar Hill,03586<br>Town Pound Porter Draft<br>Last Updated 01-2024");
marker208 = L.marker([44.224118, -71.738274]).addTo(Draft_Other).bindPopup("Chef Joes Catering<br>651 Main Street,Franconia,03580<br>Pond Hockey Pilsner Draft<br>Last Updated 01-2024");
marker209 = L.marker([43.850057, -71.666250]).addTo(Cans_SafeSpace).bindPopup("Chesleys Mini Mart<br>2122 Us Route 3,Campton,03223<br>Safe Space Can<br>Last Updated 01-2024");
marker211 = L.marker([43.881519, -71.606640]).addTo(Cans_SafeSpace).bindPopup("J.l. Sullivans<br>891 Rt 49,Thornton,03285<br>Safe Space Can<br>Last Updated 01-2024");
marker212 = L.marker([44.030542, -71.686473]).addTo(Draft_SafeSpace).bindPopup("Merlands Tap And Table<br>96 Main Street,North Woodstock,03262<br>Safe Space Draft<br>Last Updated 01-2024");
marker213 = L.marker([44.227915, -71.748069]).addTo(Cans_SafeSpace).bindPopup("Franconia Market And Deli<br>347 Main Street,Franconia,03580<br>Safe Space Can<br>Last Updated 01-2024");
marker214 = L.marker([44.029197, -71.685933]).addTo(Cans_SafeSpace).bindPopup("Kancamagus Country Store<br>61 Main Street,Lincoln,03251<br>Safe Space Can<br>Last Updated 01-2024");
marker215 = L.marker([43.850481, -71.643126]).addTo(Cans_Kolsch).addTo(Cans_SafeSpace).bindPopup("Aloha Campton<br>11 Vintinber Road,Campton,03223<br>Kapitol Kolsch Can, Safe Space Can<br>Last Updated 01-2024");
marker216 = L.marker([44.050913, -71.658959]).addTo(Cans_SafeSpace).bindPopup("Rite Aid/Lincoln 4156<br>Route 112, Main Street,Lincoln,03251<br>Safe Space Can<br>Last Updated 01-2024");
marker217 = L.marker([44.196019, -71.753050]).addTo(Cans_SafeSpace).bindPopup("Franconia Inn<br>1172 Easton Road,Franconia,03580<br>Safe Space Can<br>Last Updated 01-2024");
marker218 = L.marker([44.029724, -71.686118]).addTo(Cans_SafeSpace).bindPopup("Ks Market<br>85 Main Street,Lincoln,03251<br>Safe Space Can<br>Last Updated 01-2024");
marker222 = L.marker([44.038175, -71.674741]).addTo(Cans_SafeSpace).bindPopup("7-11 Lincoln 37390J<br>36 Main Street,Lincoln,03251<br>Safe Space Can<br>Last Updated 01-2024");
marker223 = L.marker([44.049449, -71.659647]).addTo(Draft_SafeSpace).bindPopup("Pub32 Llc<br>264 Main Street/Unit 14,Lincoln,03251<br>Safe Space Draft<br>Last Updated 01-2024");
marker224 = L.marker([43.863449, -71.634952]).addTo(Cans_SafeSpace).bindPopup("Campton Cupboard Inc.<br>1315 Route 175,Campton,03223<br>Safe Space Can<br>Last Updated 01-2024");
marker227 = L.marker([44.034129, -71.686678]).addTo(Cans_SafeSpace).bindPopup("Waynes Market<br>173 Main Street,North Woodstock,03262<br>Safe Space Can<br>Last Updated 01-2024");
marker230 = L.marker([43.547202, -71.462363]).addTo(Cans_SafeSpace).bindPopup("Lakeport Opera House<br>781 Union Avenue,Laconia,03246<br>Safe Space Can<br>Last Updated 01-2024");
marker231 = L.marker([43.444533, -71.477605]).addTo(Draft_SafeSpace).bindPopup("Shooters Tavern Llc<br>190 Dwh,Belmont,03276<br>Safe Space Draft<br>Last Updated 01-2024");
marker232 = L.marker([43.513754, -71.490429]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Welcome Mart<br>93 Daniel Webster Highway,Belmont,03220<br>Safe Space Can, Gov’nah Can<br>Last Updated 01-2024");
marker233 = L.marker([43.531107, -71.439209]).addTo(Cans_SafeSpace).bindPopup("Big Apple/Gilford/1080<br>4 Country Club Road,Gilford,03249<br>Safe Space Can<br>Last Updated 01-2024");
marker234 = L.marker([43.947390, -71.676792]).addTo(Cans_SafeSpace).bindPopup("Funspot<br>Route 3,Weirs Beach,03246<br>Safe Space Can<br>Last Updated 01-2024");
marker235 = L.marker([43.577325, -71.402717]).addTo(Cans_SafeSpace).bindPopup("Lakeshore Market And Deli<br>18 Weirs Road,Gilford,03249<br>Safe Space Can<br>Last Updated 01-2024");
marker236 = L.marker([43.546693, -71.485798]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Laconia Express<br>17 Lexington Drive,Laconia,03246<br>Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker237 = L.marker([43.528221, -71.470059]).addTo(Draft_Kolsch).bindPopup("Defiant Records Llc<br>609 Main Street,Laconia,03246<br>Kapitol Kolsch Draft<br>Last Updated 01-2024");
marker239 = L.marker([43.548369, -71.461749]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Case N Keg-Laconia<br>855 Union Avenue,Laconia,03246<br>Coffee Stout Can, Pond Hockey Pilsner Can, Safe Space Can<br>Last Updated 01-2024");
marker240 = L.marker([43.569288, -71.345862]).addTo(Cans_SafeSpace).bindPopup("Ellacoya Country Store<br>2667 Lakeshore Road,Gilford,03249<br>Safe Space Can<br>Last Updated 01-2024");
marker241 = L.marker([43.566871, -71.427437]).addTo(Cans_SafeSpace).bindPopup("Haffners Energy 2228<br>63 Gilford East Drive,Gilford,03249<br>Safe Space Can<br>Last Updated 01-2024");
marker243 = L.marker([43.523914, -71.467433]).addTo(Cans_Other).bindPopup("Vista Foods<br>376 South Main Street,Laconia,03246<br>Gov’nah Can<br>Last Updated 01-2024");
marker245 = L.marker([43.547797, -71.407081]).addTo(Cans_SafeSpace).bindPopup("Gilford Village Store<br>7 Belknap Mountain Road,Gilford,03249<br>Safe Space Can<br>Last Updated 01-2024");
marker249 = L.marker([43.246943, -71.369747]).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("C-Man Roadside Epsom<br>910 Suncook Valley Hwy,Epsom,03234<br>Safe Space Can, Double Safe Space Can<br>Last Updated 01-2024");
marker250 = L.marker([43.337653, -71.564476]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Canterbury Country Store<br>3 Center Road,Canterbury,03224<br>Coffee Stout Can, Safe Space Can<br>Last Updated 01-2024");
marker251 = L.marker([43.293616, -71.353814]).addTo(Draft_Other).bindPopup("Flannel Tavern<br>345 Suncook Valley Road,Chichester,03258<br>Apple Crisp Porter Draft<br>Last Updated 01-2024");
marker252 = L.marker([43.431420, -71.457487]).addTo(Draft_SafeSpace).bindPopup("Lakes Region Casino<br>1265 Laconia Road,Belmont,03220<br>Safe Space Draft<br>Last Updated 01-2024");
marker253 = L.marker([43.227951, -71.362443]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Epsom Circle Market<br>1921 Dover Road,Epsom,03234<br>Safe Space Can, Senatah Can, Gov’nah Can<br>Last Updated 01-2024");
marker254 = L.marker([43.212038, -71.482786]).addTo(Cans_SafeSpace).bindPopup("Route 106 Shell<br>242 Sheep Davis Road,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker255 = L.marker([43.340582, -71.260809]).addTo(Cans_SafeSpace).bindPopup("White Buffalo Trading Llc<br>89 South Barnstead Road,Barnstead,03225<br>Safe Space Can<br>Last Updated 01-2024");
marker256 = L.marker([43.346592, -71.466835]).addTo(Cans_SafeSpace).bindPopup("Rusty Lantern Loudon #904<br>904 Route 106 North,Loudon,03307<br>Safe Space Can<br>Last Updated 01-2024");
marker257 = L.marker([43.440846, -71.483918]).addTo(Cans_SafeSpace).bindPopup("Belmont Village Store<br>235 Main Street,Belmont,03220<br>Safe Space Can<br>Last Updated 01-2024");
marker258 = L.marker([43.306041, -71.331768]).addTo(Cans_SafeSpace).bindPopup("Danis Supermarket<br>18 Water Street,Pittsfield,03263<br>Safe Space Can<br>Last Updated 01-2024");
marker259 = L.marker([43.284154, -71.466623]).addTo(Cans_SafeSpace).bindPopup("Loudon Village Cty Store<br>40 South Village Road,Loudon,03307<br>Safe Space Can<br>Last Updated 01-2024");
marker260 = L.marker([43.243603, -71.405121]).addTo(Cans_SafeSpace).bindPopup("Rapid Refill # 135<br>141 Dover Road,Chichester,03258<br>Safe Space Can<br>Last Updated 01-2024");
marker261 = L.marker([43.458689, -71.560851]).addTo(Draft_SafeSpace).bindPopup("Pizzeria Uno/Tilton<br>120 Laconia Road,Tilton,03276<br>Safe Space Draft<br>Last Updated 01-2024");
marker262 = L.marker([43.322807, -71.304658]).addTo(Cans_SafeSpace).bindPopup("Blueberry Station<br>1 Suncook Valley Road,Barnstead,03218<br>Safe Space Can<br>Last Updated 01-2024");
marker264 = L.marker([43.475679, -71.542791]).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Smoke & Barley<br>485 Laconia Road,Tilton,03276<br>Safe Space Can, Double Safe Space Can<br>Last Updated 01-2024");
marker268 = L.marker([43.326117, -71.478009]).addTo(Cans_Other).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Loudon Mart Llc<br>577 Route 106 North,Loudon,03307<br>Gov’nah Can, Safe Space Can, Double Safe Space Can<br>Last Updated 01-2024");
marker271 = L.marker([43.131154, -71.451782]).addTo(Cans_SafeSpace).bindPopup("American Legion/Pembroke<br>43 Church Street,Pembroke,03275<br>Safe Space Can<br>Last Updated 01-2024");
marker272 = L.marker([43.117561, -71.441581]).addTo(Cans_SafeSpace).bindPopup("Nouria Allenstown<br>3 Allenstown Road,Allenstown,03275<br>Safe Space Can<br>Last Updated 01-2024");
marker273 = L.marker([43.077787, -71.458808]).addTo(Cans_SafeSpace).bindPopup("Nouria Hooksett North<br>1560 Hooksett Road,Hooksett,03106<br>Safe Space Can<br>Last Updated 01-2024");
marker274 = L.marker([43.241554, -71.150863]).addTo(Cans_Other).bindPopup("7 C's Kitchen And Market<br>564 Province Road,Strafford,03884<br>Gov’nah Can<br>Last Updated 01-2024");
marker275 = L.marker([43.219051, -71.499921]).addTo(Cans_Other).bindPopup("Smokers Choice Iii<br>184 Loudon Rd,Concord,03301<br>Pandora's Kettle Sour Can<br>Last Updated 01-2024");
marker276 = L.marker([43.212927, -71.513184]).addTo(Cans_SafeSpace).bindPopup("Kwik Stop/Loudon Road<br>110 Loudon Road,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker277 = L.marker([43.179774, -71.488505]).addTo(Cans_Kolsch).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Wineing Butcher<br>16 Sheep Davis Road,Pembroke,03275<br>Gov’nah Can, Kapitol Kolsch Can, Four Rivers Red Can, Pond Hockey Pilsner Can<br>Last Updated 01-2024");
marker278 = L.marker([43.050784, -71.439120]).addTo(Draft_SafeSpace).bindPopup("New England Tap House<br>1292 Hooksett Road,Hooksett,03106<br>Safe Space Draft<br>Last Updated 01-2024");
marker279 = L.marker([43.190518, -71.512395]).addTo(Draft_SafeSpace).bindPopup("Red Blazer Rest.& Pub<br>72 Manchester Street,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker280 = L.marker([43.141775, -71.230736]).addTo(Cans_Other).bindPopup("Mr Mikes/Deerfield<br>2 Mountain Road,Deerfield,03037<br>Gov’nah Can<br>Last Updated 01-2024");
marker286 = L.marker([43.040074, -71.432998]).addTo(Cans_SafeSpace).bindPopup("Space Center<br>51 Zapora Drive,Hooksett,03106<br>Safe Space Can<br>Last Updated 01-2024");
marker288 = L.marker([43.123028, -71.441532]).addTo(Cans_SafeSpace).addTo(Cans_Kolsch).bindPopup("Sullys Superette<br>39 Allenstown Road,Allenstown,03275<br>Kapitol Kolsch Can, Safe Space Can<br>Last Updated 01-2024");
marker290 = L.marker([43.204956, -71.536631]).addTo(Draft_SafeSpace).bindPopup("Penuches Ale House<br>16 Bicentennial Square,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker291 = L.marker([43.205295, -71.534978]).addTo(Draft_Other).addTo(Draft_SafeSpace).addTo(Draft_Other).bindPopup("Cheers Inc.<br>17 Depot Street,Concord,03301<br>Conquered Draft, Safe Space Draft<br>Last Updated 01-2024");
marker292 = L.marker([43.194913, -71.527558]).addTo(Draft_SafeSpace).bindPopup("# Common Man Concord Inc<br>25 Water Street,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker293 = L.marker([43.110248, -71.474948]).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).bindPopup("C-Man 93N Beer Store<br>530 West River Rd.  North,Hooksett,03106<br>Apple Crisp Porter Can, Senatah Can, Conquered Can, Double Safe Space Can, Pond Hockey Pilsner Can, Town Pound Porter Can, Live Light Lager Can, Lucky 7s Ipa Can, Coffee Stout Can, Four Rivers Red Can, Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker294 = L.marker([43.203834, -71.535207]).addTo(Cans_SafeSpace).bindPopup("Red River Theater<br>11 S Main Street,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker295 = L.marker([43.108564, -71.476710]).addTo(Cans_Other).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).bindPopup("C-Man 93S Beer Store<br>25 Springer Rd.  South,Hooksett,03106<br>Safe Space Can, Gov’nah Can, Pond Hockey Pilsner Can, Senatah Can, Imperial Stout MiniCans, Double Safe Space Can, Four Rivers Red Can<br>Last Updated 01-2024");
marker296 = L.marker([43.068385, -71.469128]).addTo(Draft_SafeSpace).bindPopup("Pizza Man Of Hooksett<br>254 West River Rd.,Hooksett,03106<br>Safe Space Draft<br>Last Updated 01-2024");
marker297 = L.marker([43.235967, -71.534699]).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Eastside Market<br>11 Eastman Street,Concord,03301<br>Safe Space Can, Gov’nah Can, Double Safe Space Can<br>Last Updated 01-2024");
marker298 = L.marker([43.203406, -71.535256]).addTo(Draft_SafeSpace).addTo(Cans_Other).bindPopup("Vibes Burgers<br>25 South Main Street,Concord,03301<br>Safe Space Draft, Pandora's Kettle Sour Can<br>Last Updated 01-2024");
marker299 = L.marker([43.206401, -71.535905]).addTo(Cans_SafeSpace).bindPopup("Street-Concord<br>76 North Main Street,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker300 = L.marker([43.201170, -71.534887]).addTo(Cans_SafeSpace).addTo(Draft_SafeSpace).bindPopup("Capitol Ctr For The Arts<br>44 South Main Street,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker301 = L.marker([43.203834, -71.535207]).addTo(Draft_Kolsch).bindPopup("Os Steak & Seafood South<br>11 South Main Street,Concord,03301<br>Kapitol Kolsch Draft<br>Last Updated 01-2024");
marker302 = L.marker([43.169754, -71.533934]).addTo(Cans_SafeSpace).bindPopup("Bow Mobil<br>519 South Street,Bow,03304<br>Safe Space Can<br>Last Updated 01-2024");
marker303 = L.marker([43.170279, -71.533508]).addTo(Cans_SafeSpace).bindPopup("Hampton Inn Bow<br>515 South Street,Bow,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker304 = L.marker([43.193662, -71.540032]).addTo(Cans_SafeSpace).bindPopup("Rite Aid/South St 4282<br>92 South Street,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker305 = L.marker([43.202600, -71.534723]).addTo(Cans_SafeSpace).bindPopup("Constantly Pizza Inc.<br>39 South Main Street,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker306 = L.marker([43.180896, -71.542373]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Flanagans Southender<br>250 South Street,Concord,03301<br>Coffee Stout Can, Senatah Can, Pond Hockey Pilsner Can, Safe Space Can<br>Last Updated 01-2024");
marker307 = L.marker([43.204351, -71.535408]).addTo(Cans_SafeSpace).bindPopup("Wow Billiards & Bar<br>2 North Main Street,Concord,03301<br>Safe Space Can<br>Last Updated 01-2024");
marker308 = L.marker([43.177501, -71.530612]).addTo(Draft_SafeSpace).bindPopup("Concord T-Bones<br>404 South Main Street,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker309 = L.marker([43.208093, -71.529041]).addTo(Draft_SafeSpace).bindPopup("Buffalo Wild Wings - Con<br>8 Loudon Road,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker310 = L.marker([43.203239, -71.535812]).addTo(Cans_Other).addTo(Cans_Kolsch).bindPopup("Concord Cooperative Mkt<br>24 South Main Street,Concord,03301<br>Four Rivers Red Can, Kapitol Kolsch Can<br>Last Updated 01-2024");
marker311 = L.marker([43.205180, -71.535163]).addTo(Draft_SafeSpace).bindPopup("Angelinas Downhome<br>11 Depot Street,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker312 = L.marker([43.210334, -71.532288]).addTo(Draft_SafeSpace).bindPopup("Pizzeria Uno/Concord<br>15 Fort Eddy Road,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker313 = L.marker([43.041169, -71.469128]).addTo(Cans_SafeSpace).bindPopup("Mr Gas +<br>36 West River Road,Hooksett,03106<br>Safe Space Can<br>Last Updated 01-2024");
marker316 = L.marker([43.048981, -71.460431]).addTo(Cans_Other).addTo(Cans_SafeSpace).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).bindPopup("The Packie Craft Beer<br>88 West River Road,Hooksett,03106<br>Coffee Stout Can, Lucky 7s Ipa Can, Pond Hockey Pilsner Can, Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker321 = L.marker([43.075550, -71.468339]).addTo(Draft_SafeSpace).bindPopup("Clear The Ice Cafe Llc<br>311 West River Road,Hooksett,03106<br>Safe Space Draft<br>Last Updated 01-2024");
marker322 = L.marker([43.196753, -71.530507]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("South Main Quick Stop<br>201 South Main Street,Concord,03301<br>Senatah Can, Safe Space Can<br>Last Updated 01-2024");
marker326 = L.marker([43.257290, -71.537819]).addTo(Draft_Other).bindPopup("Concord Country Club Inc.<br>22 Country Club Lane,Concord,03301<br>Four Rivers Red Draft<br>Last Updated 01-2024");
marker327 = L.marker([43.194337, -71.538594]).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Capital Beverages<br>3 Broadway,Concord,03301<br>Pond Hockey Pilsner Can, Apple Crisp Porter Can<br>Last Updated 01-2024");
marker329 = L.marker([43.265343, -71.586142]).addTo(Draft_SafeSpace).bindPopup("C.c. Tomatos<br>209 Fisherville Road,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker330 = L.marker([43.191141, -71.674612]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Local Baskit<br>377 Main Street,Contoocook,03229<br>Safe Space Can, Coffee Stout Can<br>Last Updated 01-2024");
marker331 = L.marker([43.378925, -71.716730]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Crossroads Country Store<br>296 Old Turnpike Rd,Salisbury,03268<br>Safe Space Can, Double Safe Space Can<br>Last Updated 01-2024");
marker332 = L.marker([43.281798, -71.819223]).addTo(Cans_SafeSpace).bindPopup("Market Basket-Warner<br>30 Route 103 West,Warner,03278<br>Safe Space Can<br>Last Updated 01-2024");
marker333 = L.marker([43.209112, -71.536369]).addTo(Draft_SafeSpace).bindPopup("Holiday Inn-Concord<br>172 North Main Street,Concord,03301<br>Safe Space Draft<br>Last Updated 01-2024");
marker334 = L.marker([43.311339, -71.616322]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("Boscawen Mart<br>157 King Street,Boscawen,03303<br>Double Safe Space Can, Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker335 = L.marker([43.280299, -71.599517]).addTo(Cans_SafeSpace).bindPopup("Village St. Discount Bev<br>308 Village Street,Penacook,03303<br>Safe Space Can<br>Last Updated 01-2024");
marker339 = L.marker([43.280193, -71.599100]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("River Hill Market<br>189 Carter Hill Road,Penacook,03303<br>Senatah Can, Gov’nah Can, Safe Space Can<br>Last Updated 01-2024");
marker345 = L.marker([43.189421, -71.666756]).addTo(Draft_SafeSpace).bindPopup("Lakehouse Tavern<br>157 Main Street,Hopkinton,03229<br>Safe Space Draft<br>Last Updated 01-2024");
marker346 = L.marker([43.224715, -71.714146]).addTo(Cans_Other).addTo(Cans_SafeSpace).bindPopup("#Colonial Village<br>54 Park Avenue,Contoocook,03229<br>Double Safe Space Can, Safe Space Can<br>Last Updated 01-2024");
marker348 = L.marker([43.412658, -71.981649]).addTo(Draft_SafeSpace).bindPopup("Little Brothers Burgers<br>420 Main St,New London,03257<br>Safe Space Draft<br>Last Updated 01-2024");
marker349 = L.marker([43.106394, -71.901230]).addTo(Draft_SafeSpace).bindPopup("Angus Lea Golf Course<br>126 West Main Street,Hillsborough,03244<br>Safe Space Draft<br>Last Updated 01-2024");
marker350 = L.marker([42.941137, -71.519281]).addTo(Draft_SafeSpace).bindPopup("1750 Taphouse<br>170 Rt 101,Bedford,03110<br>Safe Space Draft<br>Last Updated 01-2024");
marker351 = L.marker([43.047209, -71.685388]).addTo(Draft_SafeSpace).addTo(Draft_Other).bindPopup("Stark House Tavern (The)<br>487 S Stark Hwy,Weare,03281<br>Safe Space Draft, Pandora Kettle Draft<br>Last Updated 01-2024");
marker352 = L.marker([42.883750, -72.549829]).addTo(Cans_Other).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Riverside Grocery<br>913 Gulf Rd & Rte 9,Chesterfield,03466<br>Porter Can, Coffee Stout Can, BA Stout MiniCans<br>Last Updated 01-2024");
marker353 = L.marker([43.631924, -72.315576]).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Shaw's #4555 - W.leb<br>10 Benning Dr,West Lebanon,03784<br>Safe Space Can, Gov'nah Can<br>Last Updated 01-2024");
marker354 = L.marker([42.970071, -71.508407]).addTo(Cans_SafeSpace).bindPopup("Market Basket #71 Bedford<br>539 Donald Street,Bedford,03110<br>Safe Space Can<br>Last Updated 01-2024");
marker355 = L.marker([42.816444, -71.102238]).addTo(Cans_SafeSpace).addTo(Cans_Other).bindPopup("Food Plus<br>5 Plaistow Road-Rte 125,Plaistow,03865<br>Safe Space Can, Double Safe Space Can<br>Last Updated 01-2024");
marker356 = L.marker([42.899580, -72.429675]).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Big Deal - Spofford<br>1474 Rte 9,Chesterfield,03462<br>Porter Can, Coffee Stout Can<br>Last Updated 01-2024");
marker357 = L.marker([42.948484, -72.320129]).addTo(Cans_Other).addTo(Cans_Other).bindPopup("Big Deal - Keene<br>650 Park Avenue,Keene,03431<br>Double Safe Space Can, Coffee Stout Can<br>Last Updated 01-2024");
marker358 = L.marker([42.916407, -71.374389]).addTo(Draft_Other).bindPopup("Twins Smoke Shop<br>80 Perkins Rd,Londonderry,03053<br>Four Rivers Draft<br>Last Updated 01-2024");
marker359 = L.marker([42.841792, -71.719406]).addTo(Draft_SafeSpace).bindPopup("Taco Time Cocina & Cantina<br>11 Wilton Road,Milford,03055<br>Safe Space Draft<br>Last Updated 01-2024");
marker360 = L.marker([42.756304, -71.674172]).addTo(Draft_Other).bindPopup("Chrysanthi's<br>204 Route 13,Brookline,03033<br>Four Rivers Draft<br>Last Updated 01-2024");
marker361 = L.marker([42.875723, -71.956945]).addTo(Draft_SafeSpace).bindPopup("Bowling Acres<br>32 Elm Street,Peterborough,03458<br>Safe Space Draft<br>Last Updated 01-2024");
marker362 = L.marker([43.094368, -71.730446]).addTo(Cans_SafeSpace).bindPopup("Zoomies Corner Market<br>1437 S Stark Hwy,Weare,03281<br>Safe Space Can<br>Last Updated 01-2024");
marker363 = L.marker([42.845616, -71.740399]).addTo(Cans_SafeSpace).bindPopup("Wilton House Of Pizza<br>28 Forest Rd,Wilton,03086<br>Safe Space Can<br>Last Updated 01-2024");
marker364 = L.marker([42.954267, -71.477845]).addTo(Cans_Other).bindPopup("Whole Foods - Bedford - Store<br>121 South River Rd,Bedford,03110<br>Gov'nah Can<br>Last Updated 01-2024");
marker365 = L.marker([42.754838, -72.004106]).addTo(Cans_Other).bindPopup("West Of The Border<br>1044 Nh-119,Rindge,03461<br>Gov'nah Can<br>Last Updated 01-2024");
marker366 = L.marker([42.839472, -71.654079]).addTo(Cans_SafeSpace).bindPopup("Sun Mart<br>71 Mont Vernon Street,Milford,03055<br>Safe Space Can<br>Last Updated 01-2024");
marker367 = L.marker([43.021158, -71.601093]).addTo(Cans_SafeSpace).bindPopup("Sully's Superette<br>10 N. Mast Road,Goffstown,03045<br>Safe Space Can<br>Last Updated 01-2024");
marker368 = L.marker([42.788667, -71.201431]).addTo(Cans_SafeSpace).bindPopup("Smoke N Barley - Salem<br>301 Main Street,Salem,03079<br>Safe Space Can<br>Last Updated 01-2024");
marker369 = L.marker([43.106118, -72.426277]).addTo(Cans_SafeSpace).bindPopup("Shaw's #3533 - Walpole<br>32 Ames Plaza,Walpole,03608<br>Safe Space Can<br>Last Updated 01-2024");
marker370 = L.marker([42.825129, -71.624875]).addTo(Cans_Other).bindPopup("Shaw's #2492 - Milford<br>586 Nashua Street,Milford,03055<br>Gov'nah Can<br>Last Updated 01-2024");
marker371 = L.marker([42.808014, -71.289834]).addTo(Cans_SafeSpace).bindPopup("Shaw's #0686 - Windham<br>43 Indian Rock Road,Windham,03087<br>Safe Space Can<br>Last Updated 01-2024");
marker372 = L.marker([42.714105, -71.664400]).addTo(Cans_SafeSpace).bindPopup("Route 13 Stateline Conv Mart<br>44c Route 13,Brookline,03033<br>Safe Space Can<br>Last Updated 01-2024");
marker373 = L.marker([42.805775, -71.263942]).addTo(Cans_Kolsch).bindPopup("Prime Butcher Windham<br>58 Range Road,Windham,03087<br>Kolsch Can<br>Last Updated 01-2024");
marker374 = L.marker([42.860697, -71.170891]).addTo(Cans_Kolsch).bindPopup("Prime Butcher Of Hampstead<br>201 Route 111,Hampstead,03841<br>Kolsch Can<br>Last Updated 01-2024");
marker375 = L.marker([43.369043, -72.339970]).addTo(Cans_SafeSpace).bindPopup("Pleasant St Mobil<br>114 Pleasant St,Claremont,03743<br>Safe Space Can<br>Last Updated 01-2024");
marker376 = L.marker([42.885191, -72.544999]).addTo(Cans_Other).bindPopup("Pierre's Place<br>85 Route 9,Chesterfield,03466<br>Porter Can<br>Last Updated 01-2024");
marker377 = L.marker([42.895210, -71.675145]).addTo(Cans_SafeSpace).bindPopup("Mont Vernon General Store<br>10 North Main Street,Mont Vernon,03057<br>Safe Space Can<br>Last Updated 01-2024");
marker378 = L.marker([42.910064, -72.296887]).addTo(Cans_SafeSpace).bindPopup("Market Basket #64 Swanzey<br>11 West Swanzey Rd,Swanzey,03446<br>Safe Space Can<br>Last Updated 01-2024");
marker379 = L.marker([42.840786, -71.705804]).addTo(Cans_SafeSpace).bindPopup("Market Basket #57 Milford<br>21 Jones Street,Milford,03055<br>Safe Space Can<br>Last Updated 01-2024");
marker380 = L.marker([43.043304, -71.681194]).addTo(Cans_SafeSpace).bindPopup("Lanctots Grocery<br>421 S Stark Hwy,Weare,03281<br>Safe Space Can<br>Last Updated 01-2024");
marker381 = L.marker([42.851772, -71.215702]).addTo(Cans_SafeSpace).bindPopup("Howie Glynn - Derry<br>418 Island Pond Road,Derry,03038<br>Safe Space Can<br>Last Updated 01-2024");
marker382 = L.marker([42.922056, -71.535766]).addTo(Cans_SafeSpace).bindPopup("Hannaford #8305 - Bedford - Jenkins Rd<br>4 Jenkins Road,Bedford,03110<br>Safe Space Can<br>Last Updated 01-2024");
marker383 = L.marker([43.636273, -72.317286]).addTo(Cans_SafeSpace).bindPopup("Hannaford #8266 - W.leb<br>8 Market St,West Lebanon,03784<br>Safe Space Can<br>Last Updated 01-2024");
marker384 = L.marker([43.422815, -72.003203]).addTo(Cans_SafeSpace).bindPopup("Hannaford #8246 - New London<br>295 Newport Road,New London,03257<br>Safe Space Can<br>Last Updated 01-2024");
marker385 = L.marker([42.866282, -71.343663]).addTo(Cans_SafeSpace).bindPopup("Hannaford #8185 - Londery<br>6 Hampton Drive,Londonderry,03053<br>Safe Space Can<br>Last Updated 01-2024");
marker386 = L.marker([42.935145, -72.295499]).addTo(Cans_SafeSpace).bindPopup("Hannaford #8163 - Keene<br>481 West Street,Keene,03431<br>Safe Space Can<br>Last Updated 01-2024");
marker387 = L.marker([43.055489, -71.714100]).addTo(Cans_SafeSpace).bindPopup("Country 3 Corners<br>833 S Stark Hwy,Weare,03281<br>Safe Space Can<br>Last Updated 01-2024");
marker388 = L.marker([42.777997, -71.496587]).addTo(Cans_SafeSpace).bindPopup("Alltown Fresh #2756 - Nashua<br>242 Amherst St,Nashua,03063<br>Safe Space Can<br>Last Updated 01-2024");
