'use strict'

const Unit = require('./Unit')

class TrebleClef extends Unit {
  constructor (draw, size, x, y) {
    super(draw, size, 0.35, 10, 10)
  }

  body () {
    return this.draw.path('M29.627300477538 80.64306023832415C27.38219047753799 81.10353023832414 25.301560477538004 82.3355102383241 23.31567047753802 84.29804023832412C21.327320477537995 86.29659023832414 20.262910477537986 88.57611023832413 20.08892047753804 91.09807023832411C19.979550477538027 92.68325023832415 20.39694047753804 94.5220202383241 21.312470477538028 96.5037402383241C22.22549047753799 98.52154023832418 23.71750047753804 100.03624023832413 25.71376047753799 101.0789802383241C26.389940477538033 101.27042023832416 26.690090477538007 101.65312023832416 26.65529047753799 102.15752023832408C26.642880477538 102.33769023832417 26.377660477538 102.5003602383241 25.75380047753802 102.60211023832414C22.524770477538 101.54670023832409 19.93813047753801 99.59446023832413 18.025090477537987 96.81990023832418C16.114520477538036 94.00935023832415 15.239970477538037 90.90825023832411 15.40634047753801 87.44459023832411C15.770710477538017 83.74120023832415 17.128820477538028 80.35981023832414 19.47816047753801 77.33637023832415C21.866120477538033 74.2794502383241 24.803350477538032 72.20156023832413 28.289860477537985 71.10279023832413L26.68055047753799 58.14099023832415C20.801110477538003 62.368770238324146 15.956480477538008 66.84898023832415 12.10560047753799 71.65116023832411C8.257220477537999 76.41728023832411 6.076290477538009 81.73286023832412 5.526670477538005 87.5954402383241C5.417420477538002 90.23042023832414 5.782630477538021 92.82578023832411 6.624740477538012 95.3454402383241C7.4643704775380115 97.90114023832416 8.827000477538007 100.2395102383241 10.707590477537991 102.4326402383241C14.507390477537996 106.7853502383241 19.669220477538005 109.27727023832415 26.118370477538036 109.9395302383241C28.331180477538027 109.94734023832416 30.705820477538026 109.71306023832415 33.27839047753801 109.2389702383241L29.627300477538 80.64306023832415ZM32.252210477538 80.46222023832411L35.974230477537986 108.55630023832418C41.689640477538006 106.70625023832417 44.805840477538 102.03442023832417 45.31790047753802 94.6127302383241C45.16437047753803 92.10437023832412 44.59625047753801 89.82085023832411 43.50514047753799 87.7545502383241C42.45266047753799 85.65480023832413 40.973070477538016 83.95995023832415 39.030330477538 82.66748023832412C37.08759047753799 81.37505023832415 34.85230047753802 80.64162023832415 32.252210477538 80.46222023832411ZM27.434300477538017 42.48251023832415C28.675700477538015 41.844200238324106 30.134980477537994 40.677950238324115 31.737390477538014 39.01474023832412C33.33731047753801 37.38758023832412 34.92347047753802 35.43369023832412 36.45479047753801 33.22259023832413C38.02474047753802 30.977970238324133 39.30830047753804 28.67740023832414 40.305390477538 26.32087023832412C41.30002047753803 24.00035023832413 41.85385047753803 21.75801023832412 41.99804047753801 19.6684102383241C42.06019047753799 18.767710238324128 42.05009047753802 17.86204023832414 41.924210477538026 17.05697023832414C41.86925047753803 15.74999023832413 41.541610477538 14.713820238324104 40.90273047753803 13.981920238324108C40.26132047753802 13.286080238324132 39.419490477538005 12.866000238324148 38.336130477538035 12.791260238324128C36.169370477538024 12.641750238324107 34.127370477537994 13.840170238324106 32.210040477538 16.3866202383241C30.714800477538034 18.60022023832414 29.406420477538035 21.26109023832413 28.398170477538002 24.304630238324137C27.351350477538034 27.38173023832411 26.668140477538003 30.44772023832411 26.379640477538004 33.577130238324116C26.31412047753801 37.15636023832411 26.690610477538 40.11448023832412 27.434300477538017 42.48251023832415ZM25.01508047753802 44.41516023832412C23.792690477538002 38.46653023832414 23.300040477538033 32.459650238324116 23.53705047753803 26.39454023832411C23.841640477537993 22.50602023832414 24.489930477538024 18.894650238324118 25.481910477538037 15.56037023832414C26.437810477538022 12.223610238324113 27.686420477538007 9.377620238324141 29.232650477537987 6.950370238324126C30.742820477538004 4.520620238324113 32.42736047753803 2.718310238324136 34.250230477538 1.5409202383241336C35.882590477538 0.4952002383241165 37.044340477537986 -0.03999976167585828 37.65823047753801 0.0023302383241343705C38.12772047753802 0.03472023832415516 38.51254047753801 0.24227023832412442 38.851260477538034 0.5914502383241143C39.19001047753804 0.9406302383241041 39.62220047753803 1.5134202383241018 40.15029047753799 2.2738602383241187C44.027570477538035 8.659090238324154 45.687210477538 16.158260238324146 45.095620477538006 24.732850238324147C44.814730477538006 28.803970238324155 43.999630477538034 32.729650238324155 42.642860477537994 36.61794023832414C41.324670477538035 40.47271023832411 39.513330477538005 44.11243023832412 37.21381047753803 47.4650602383241C34.875700477538004 50.85128023832414 32.208800477538006 53.74416023832413 29.174470477537994 56.177330238324146L31.12020047753802 70.57410023832415C32.721580477538026 70.50360023832411 33.81491047753801 70.43425023832413 34.42880047753803 70.4766302383241C37.173320477538 70.66601023832413 39.589200477538014 71.41189023832413 41.784720477538 72.7217902383241C43.98022047753804 74.03167023832412 45.823440477538014 75.71541023832413 47.275650477537994 77.80657023832413C48.730350477537996 79.86171023832412 49.804060477538 82.18015023832413 50.496740477538 84.76190023832413C51.153350477538 87.34115023832413 51.441330477538 90.00357023832413 51.25245047753802 92.74168023832414C50.95911047753802 96.99297023832412 49.571180477538036 100.80672023832415 47.091120477538 104.14685023832408C44.61106047753802 107.48719023832416 41.07614047753802 109.81333023832417 36.44779047753801 111.15904023832411C36.61491047753802 112.94432023832417 36.94396047753801 115.5372402383241 37.47613047753802 118.86800023832416C37.969700477538 122.23250023832418 38.329930477538 124.90001023832417 38.556850477538006 126.87019023832408C38.78370047753802 128.84063023832414 38.79892047753802 130.72418023832415 38.67214047753802 132.56161023832408C38.475780477537995 135.40770023832408 37.615660477538 137.88223023832415 36.08928047753804 140.0214402383241C34.52678047753804 142.15790023832415 32.52964047753804 143.75751023832413 30.06173047753802 144.81807023832414C27.629920477538036 145.88112023832412 24.98758047753799 146.31418023832418 22.170830477538033 146.11970023832407C18.198490477538 145.84562023832416 14.808760477538016 144.48958023832415 11.99920047753804 142.08762023832412C9.192130477538 139.64935023832413 7.809480477538017 136.54959023832407 7.928520477538001 132.72057023832417C8.153680477538018 131.03478023832417 8.66028047753801 129.47696023832418 9.486940477538013 128.01362023832417C10.313560477538005 126.55025023832411 11.373100477538031 125.39273023832413 12.701660477538013 124.54329023832418C13.996610477537985 123.65507023832413 15.511990477538035 123.25300023832415 17.216740477538025 123.2620702383241C18.625100477537984 123.3590602383241 19.93389047753803 123.84777023832407 21.145630477537992 124.69141023832412C22.318780477538013 125.56882023832418 23.257850477538028 126.6832702383241 23.924210477538026 128.06877023832408C24.55447047753799 129.45154023832413 24.84978047753802 130.95618023832412 24.740410477538006 132.54146023832413C24.593770477538015 134.66707023832407 23.747260477537992 136.41862023832414 22.20085047753801 137.79605023832414C20.654460477538038 139.17352023832416 18.760530477538026 139.80302023832417 16.557680477538014 139.65087023832416L15.727120477538023 139.59370023832412C16.98637047753803 141.8525802383241 19.22048047753802 143.12876023832416 22.43446047753801 143.35068023832412C24.059480477538017 143.46279023832415 25.745520477538008 143.21717023832412 27.451430477538025 142.68311023832416C29.195930477537985 142.1158202383241 30.666450477538007 141.31222023832413 31.937690477537984 140.24161023832414C33.20893047753802 139.1709802383241 34.087920477538006 138.00087023832418 34.50240047753803 136.7261802383241C35.218230477538015 135.2915602383241 35.648800477538 133.25789023832408 35.82528047753803 130.69999023832418C35.944590477538014 128.97063023832413 35.883350477538016 127.22892023832412 35.67766047753801 125.4771302383241C35.469450477538004 123.7613502383241 35.12049047753803 121.45662023832415 34.628240477538014 118.59922023832416C34.13351047753801 115.77781023832415 33.77707047753799 113.58115023832408 33.590090477537984 112.08404023832418C31.386060477537995 112.47502023832408 29.12722047753803 112.60877023832415 26.779950477537994 112.44679023832418C22.843730477538003 112.17497023832414 19.17885047753802 111.1257702383241 15.78782047753802 109.26289023832408C12.396790477538019 107.40002023832415 9.481370477538036 104.95446023832415 7.007920477538022 101.88774023832411C4.570570477538013 98.82362023832411 2.735890477538021 95.43909023832413 1.5088404775380013 91.66208023832411C0.31539047753801697 87.9236102383241 -0.17947952246197474 84.05232023832411 0.05783047753800474 80.08679023832411C0.4558204775380261 76.42194023832411 1.385540477538001 72.9385802383241 2.914250477538019 69.71374023832414C4.445450477538003 66.45287023832412 6.325350477538024 63.397060238324116 8.587610477538021 60.584830238324116C10.849810477538 57.772560238324104 13.166830477538014 55.21752023832414 15.536220477538023 52.95569023832411C17.939250477538025 50.73234023832413 21.075620477538024 47.87183023832415 25.01508047753802 44.41516023832412Z ')
      .attr({ 'fill': '#131516', 'fill-rule': 'evenodd', 'stroke': '#131516', 'stroke-width': '0.06121717' })
  }
}

module.exports = TrebleClef
