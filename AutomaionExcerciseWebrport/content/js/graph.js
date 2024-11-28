/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 608.0, "minX": 0.0, "maxY": 4070.0, "series": [{"data": [[0.0, 608.0], [0.1, 619.0], [0.2, 621.0], [0.3, 621.0], [0.4, 629.0], [0.5, 630.0], [0.6, 630.0], [0.7, 633.0], [0.8, 634.0], [0.9, 634.0], [1.0, 636.0], [1.1, 636.0], [1.2, 637.0], [1.3, 637.0], [1.4, 638.0], [1.5, 638.0], [1.6, 639.0], [1.7, 639.0], [1.8, 639.0], [1.9, 640.0], [2.0, 643.0], [2.1, 645.0], [2.2, 646.0], [2.3, 646.0], [2.4, 646.0], [2.5, 647.0], [2.6, 647.0], [2.7, 648.0], [2.8, 648.0], [2.9, 648.0], [3.0, 649.0], [3.1, 649.0], [3.2, 650.0], [3.3, 650.0], [3.4, 650.0], [3.5, 651.0], [3.6, 651.0], [3.7, 653.0], [3.8, 653.0], [3.9, 653.0], [4.0, 655.0], [4.1, 655.0], [4.2, 655.0], [4.3, 655.0], [4.4, 656.0], [4.5, 657.0], [4.6, 657.0], [4.7, 657.0], [4.8, 657.0], [4.9, 658.0], [5.0, 658.0], [5.1, 658.0], [5.2, 658.0], [5.3, 658.0], [5.4, 659.0], [5.5, 660.0], [5.6, 660.0], [5.7, 660.0], [5.8, 661.0], [5.9, 661.0], [6.0, 661.0], [6.1, 662.0], [6.2, 662.0], [6.3, 663.0], [6.4, 663.0], [6.5, 663.0], [6.6, 664.0], [6.7, 664.0], [6.8, 664.0], [6.9, 664.0], [7.0, 666.0], [7.1, 666.0], [7.2, 667.0], [7.3, 667.0], [7.4, 668.0], [7.5, 669.0], [7.6, 670.0], [7.7, 670.0], [7.8, 671.0], [7.9, 671.0], [8.0, 672.0], [8.1, 672.0], [8.2, 672.0], [8.3, 673.0], [8.4, 673.0], [8.5, 673.0], [8.6, 673.0], [8.7, 673.0], [8.8, 675.0], [8.9, 677.0], [9.0, 677.0], [9.1, 677.0], [9.2, 677.0], [9.3, 678.0], [9.4, 678.0], [9.5, 678.0], [9.6, 678.0], [9.7, 679.0], [9.8, 679.0], [9.9, 679.0], [10.0, 680.0], [10.1, 680.0], [10.2, 680.0], [10.3, 680.0], [10.4, 681.0], [10.5, 681.0], [10.6, 681.0], [10.7, 681.0], [10.8, 681.0], [10.9, 681.0], [11.0, 682.0], [11.1, 682.0], [11.2, 682.0], [11.3, 682.0], [11.4, 682.0], [11.5, 682.0], [11.6, 684.0], [11.7, 684.0], [11.8, 685.0], [11.9, 685.0], [12.0, 685.0], [12.1, 686.0], [12.2, 686.0], [12.3, 686.0], [12.4, 687.0], [12.5, 687.0], [12.6, 687.0], [12.7, 688.0], [12.8, 688.0], [12.9, 689.0], [13.0, 689.0], [13.1, 689.0], [13.2, 689.0], [13.3, 690.0], [13.4, 691.0], [13.5, 691.0], [13.6, 691.0], [13.7, 692.0], [13.8, 692.0], [13.9, 693.0], [14.0, 693.0], [14.1, 693.0], [14.2, 694.0], [14.3, 694.0], [14.4, 694.0], [14.5, 695.0], [14.6, 695.0], [14.7, 695.0], [14.8, 696.0], [14.9, 696.0], [15.0, 697.0], [15.1, 697.0], [15.2, 697.0], [15.3, 697.0], [15.4, 698.0], [15.5, 698.0], [15.6, 698.0], [15.7, 698.0], [15.8, 699.0], [15.9, 699.0], [16.0, 699.0], [16.1, 700.0], [16.2, 700.0], [16.3, 700.0], [16.4, 700.0], [16.5, 700.0], [16.6, 701.0], [16.7, 701.0], [16.8, 701.0], [16.9, 701.0], [17.0, 701.0], [17.1, 701.0], [17.2, 702.0], [17.3, 702.0], [17.4, 703.0], [17.5, 703.0], [17.6, 703.0], [17.7, 704.0], [17.8, 705.0], [17.9, 705.0], [18.0, 706.0], [18.1, 706.0], [18.2, 706.0], [18.3, 707.0], [18.4, 707.0], [18.5, 708.0], [18.6, 708.0], [18.7, 708.0], [18.8, 708.0], [18.9, 709.0], [19.0, 709.0], [19.1, 709.0], [19.2, 709.0], [19.3, 709.0], [19.4, 710.0], [19.5, 710.0], [19.6, 710.0], [19.7, 710.0], [19.8, 710.0], [19.9, 711.0], [20.0, 711.0], [20.1, 711.0], [20.2, 711.0], [20.3, 712.0], [20.4, 712.0], [20.5, 712.0], [20.6, 712.0], [20.7, 712.0], [20.8, 712.0], [20.9, 713.0], [21.0, 713.0], [21.1, 713.0], [21.2, 714.0], [21.3, 715.0], [21.4, 715.0], [21.5, 716.0], [21.6, 716.0], [21.7, 716.0], [21.8, 716.0], [21.9, 716.0], [22.0, 716.0], [22.1, 717.0], [22.2, 717.0], [22.3, 717.0], [22.4, 717.0], [22.5, 717.0], [22.6, 719.0], [22.7, 719.0], [22.8, 719.0], [22.9, 720.0], [23.0, 720.0], [23.1, 720.0], [23.2, 720.0], [23.3, 720.0], [23.4, 721.0], [23.5, 721.0], [23.6, 722.0], [23.7, 723.0], [23.8, 723.0], [23.9, 723.0], [24.0, 724.0], [24.1, 725.0], [24.2, 725.0], [24.3, 725.0], [24.4, 726.0], [24.5, 726.0], [24.6, 726.0], [24.7, 726.0], [24.8, 726.0], [24.9, 726.0], [25.0, 727.0], [25.1, 727.0], [25.2, 727.0], [25.3, 727.0], [25.4, 728.0], [25.5, 728.0], [25.6, 729.0], [25.7, 729.0], [25.8, 729.0], [25.9, 729.0], [26.0, 730.0], [26.1, 730.0], [26.2, 730.0], [26.3, 732.0], [26.4, 732.0], [26.5, 732.0], [26.6, 732.0], [26.7, 733.0], [26.8, 734.0], [26.9, 734.0], [27.0, 734.0], [27.1, 734.0], [27.2, 735.0], [27.3, 736.0], [27.4, 736.0], [27.5, 736.0], [27.6, 737.0], [27.7, 737.0], [27.8, 737.0], [27.9, 737.0], [28.0, 738.0], [28.1, 738.0], [28.2, 740.0], [28.3, 740.0], [28.4, 740.0], [28.5, 741.0], [28.6, 741.0], [28.7, 741.0], [28.8, 742.0], [28.9, 742.0], [29.0, 742.0], [29.1, 742.0], [29.2, 743.0], [29.3, 744.0], [29.4, 744.0], [29.5, 745.0], [29.6, 745.0], [29.7, 745.0], [29.8, 746.0], [29.9, 747.0], [30.0, 747.0], [30.1, 748.0], [30.2, 748.0], [30.3, 749.0], [30.4, 749.0], [30.5, 749.0], [30.6, 750.0], [30.7, 750.0], [30.8, 750.0], [30.9, 750.0], [31.0, 750.0], [31.1, 750.0], [31.2, 750.0], [31.3, 750.0], [31.4, 750.0], [31.5, 752.0], [31.6, 752.0], [31.7, 753.0], [31.8, 753.0], [31.9, 753.0], [32.0, 753.0], [32.1, 754.0], [32.2, 754.0], [32.3, 754.0], [32.4, 754.0], [32.5, 755.0], [32.6, 755.0], [32.7, 756.0], [32.8, 756.0], [32.9, 756.0], [33.0, 757.0], [33.1, 757.0], [33.2, 758.0], [33.3, 759.0], [33.4, 759.0], [33.5, 759.0], [33.6, 759.0], [33.7, 760.0], [33.8, 761.0], [33.9, 762.0], [34.0, 762.0], [34.1, 763.0], [34.2, 763.0], [34.3, 763.0], [34.4, 764.0], [34.5, 764.0], [34.6, 764.0], [34.7, 764.0], [34.8, 764.0], [34.9, 764.0], [35.0, 765.0], [35.1, 765.0], [35.2, 766.0], [35.3, 766.0], [35.4, 766.0], [35.5, 766.0], [35.6, 767.0], [35.7, 767.0], [35.8, 767.0], [35.9, 768.0], [36.0, 769.0], [36.1, 769.0], [36.2, 769.0], [36.3, 769.0], [36.4, 770.0], [36.5, 770.0], [36.6, 771.0], [36.7, 771.0], [36.8, 771.0], [36.9, 771.0], [37.0, 772.0], [37.1, 772.0], [37.2, 772.0], [37.3, 773.0], [37.4, 773.0], [37.5, 773.0], [37.6, 773.0], [37.7, 774.0], [37.8, 774.0], [37.9, 774.0], [38.0, 775.0], [38.1, 775.0], [38.2, 776.0], [38.3, 777.0], [38.4, 777.0], [38.5, 777.0], [38.6, 778.0], [38.7, 779.0], [38.8, 779.0], [38.9, 780.0], [39.0, 780.0], [39.1, 781.0], [39.2, 782.0], [39.3, 783.0], [39.4, 784.0], [39.5, 784.0], [39.6, 784.0], [39.7, 785.0], [39.8, 786.0], [39.9, 787.0], [40.0, 788.0], [40.1, 788.0], [40.2, 789.0], [40.3, 789.0], [40.4, 790.0], [40.5, 791.0], [40.6, 792.0], [40.7, 794.0], [40.8, 796.0], [40.9, 796.0], [41.0, 797.0], [41.1, 797.0], [41.2, 797.0], [41.3, 797.0], [41.4, 798.0], [41.5, 798.0], [41.6, 799.0], [41.7, 800.0], [41.8, 801.0], [41.9, 802.0], [42.0, 802.0], [42.1, 803.0], [42.2, 804.0], [42.3, 804.0], [42.4, 806.0], [42.5, 806.0], [42.6, 806.0], [42.7, 807.0], [42.8, 807.0], [42.9, 807.0], [43.0, 808.0], [43.1, 809.0], [43.2, 812.0], [43.3, 812.0], [43.4, 813.0], [43.5, 813.0], [43.6, 815.0], [43.7, 815.0], [43.8, 816.0], [43.9, 817.0], [44.0, 818.0], [44.1, 818.0], [44.2, 818.0], [44.3, 818.0], [44.4, 820.0], [44.5, 822.0], [44.6, 823.0], [44.7, 824.0], [44.8, 824.0], [44.9, 825.0], [45.0, 826.0], [45.1, 827.0], [45.2, 827.0], [45.3, 828.0], [45.4, 832.0], [45.5, 833.0], [45.6, 833.0], [45.7, 834.0], [45.8, 834.0], [45.9, 834.0], [46.0, 838.0], [46.1, 838.0], [46.2, 838.0], [46.3, 841.0], [46.4, 842.0], [46.5, 844.0], [46.6, 845.0], [46.7, 845.0], [46.8, 845.0], [46.9, 846.0], [47.0, 847.0], [47.1, 849.0], [47.2, 851.0], [47.3, 852.0], [47.4, 853.0], [47.5, 853.0], [47.6, 854.0], [47.7, 854.0], [47.8, 855.0], [47.9, 855.0], [48.0, 857.0], [48.1, 858.0], [48.2, 861.0], [48.3, 864.0], [48.4, 865.0], [48.5, 866.0], [48.6, 869.0], [48.7, 871.0], [48.8, 871.0], [48.9, 872.0], [49.0, 872.0], [49.1, 873.0], [49.2, 874.0], [49.3, 875.0], [49.4, 878.0], [49.5, 878.0], [49.6, 880.0], [49.7, 880.0], [49.8, 881.0], [49.9, 884.0], [50.0, 884.0], [50.1, 884.0], [50.2, 884.0], [50.3, 884.0], [50.4, 884.0], [50.5, 886.0], [50.6, 887.0], [50.7, 887.0], [50.8, 887.0], [50.9, 887.0], [51.0, 887.0], [51.1, 888.0], [51.2, 888.0], [51.3, 888.0], [51.4, 889.0], [51.5, 889.0], [51.6, 890.0], [51.7, 891.0], [51.8, 900.0], [51.9, 901.0], [52.0, 904.0], [52.1, 904.0], [52.2, 908.0], [52.3, 908.0], [52.4, 910.0], [52.5, 912.0], [52.6, 913.0], [52.7, 913.0], [52.8, 919.0], [52.9, 920.0], [53.0, 921.0], [53.1, 922.0], [53.2, 923.0], [53.3, 923.0], [53.4, 923.0], [53.5, 925.0], [53.6, 927.0], [53.7, 930.0], [53.8, 931.0], [53.9, 931.0], [54.0, 933.0], [54.1, 933.0], [54.2, 937.0], [54.3, 939.0], [54.4, 942.0], [54.5, 944.0], [54.6, 946.0], [54.7, 947.0], [54.8, 947.0], [54.9, 952.0], [55.0, 954.0], [55.1, 955.0], [55.2, 959.0], [55.3, 959.0], [55.4, 960.0], [55.5, 961.0], [55.6, 966.0], [55.7, 967.0], [55.8, 968.0], [55.9, 968.0], [56.0, 968.0], [56.1, 968.0], [56.2, 969.0], [56.3, 971.0], [56.4, 972.0], [56.5, 972.0], [56.6, 975.0], [56.7, 976.0], [56.8, 977.0], [56.9, 984.0], [57.0, 984.0], [57.1, 984.0], [57.2, 987.0], [57.3, 987.0], [57.4, 987.0], [57.5, 989.0], [57.6, 990.0], [57.7, 1000.0], [57.8, 1006.0], [57.9, 1008.0], [58.0, 1008.0], [58.1, 1009.0], [58.2, 1010.0], [58.3, 1010.0], [58.4, 1012.0], [58.5, 1012.0], [58.6, 1012.0], [58.7, 1014.0], [58.8, 1017.0], [58.9, 1017.0], [59.0, 1018.0], [59.1, 1019.0], [59.2, 1019.0], [59.3, 1021.0], [59.4, 1021.0], [59.5, 1027.0], [59.6, 1029.0], [59.7, 1034.0], [59.8, 1034.0], [59.9, 1035.0], [60.0, 1037.0], [60.1, 1049.0], [60.2, 1051.0], [60.3, 1056.0], [60.4, 1057.0], [60.5, 1058.0], [60.6, 1058.0], [60.7, 1059.0], [60.8, 1060.0], [60.9, 1066.0], [61.0, 1068.0], [61.1, 1068.0], [61.2, 1073.0], [61.3, 1075.0], [61.4, 1076.0], [61.5, 1078.0], [61.6, 1085.0], [61.7, 1088.0], [61.8, 1091.0], [61.9, 1092.0], [62.0, 1093.0], [62.1, 1094.0], [62.2, 1095.0], [62.3, 1097.0], [62.4, 1103.0], [62.5, 1103.0], [62.6, 1103.0], [62.7, 1104.0], [62.8, 1110.0], [62.9, 1110.0], [63.0, 1113.0], [63.1, 1115.0], [63.2, 1115.0], [63.3, 1117.0], [63.4, 1125.0], [63.5, 1125.0], [63.6, 1131.0], [63.7, 1133.0], [63.8, 1136.0], [63.9, 1141.0], [64.0, 1148.0], [64.1, 1151.0], [64.2, 1153.0], [64.3, 1155.0], [64.4, 1157.0], [64.5, 1159.0], [64.6, 1160.0], [64.7, 1160.0], [64.8, 1167.0], [64.9, 1167.0], [65.0, 1171.0], [65.1, 1172.0], [65.2, 1177.0], [65.3, 1180.0], [65.4, 1182.0], [65.5, 1183.0], [65.6, 1184.0], [65.7, 1189.0], [65.8, 1191.0], [65.9, 1191.0], [66.0, 1193.0], [66.1, 1207.0], [66.2, 1207.0], [66.3, 1208.0], [66.4, 1209.0], [66.5, 1211.0], [66.6, 1211.0], [66.7, 1218.0], [66.8, 1221.0], [66.9, 1225.0], [67.0, 1226.0], [67.1, 1229.0], [67.2, 1231.0], [67.3, 1231.0], [67.4, 1239.0], [67.5, 1243.0], [67.6, 1248.0], [67.7, 1251.0], [67.8, 1255.0], [67.9, 1261.0], [68.0, 1262.0], [68.1, 1264.0], [68.2, 1266.0], [68.3, 1270.0], [68.4, 1272.0], [68.5, 1274.0], [68.6, 1277.0], [68.7, 1279.0], [68.8, 1281.0], [68.9, 1281.0], [69.0, 1284.0], [69.1, 1287.0], [69.2, 1291.0], [69.3, 1295.0], [69.4, 1309.0], [69.5, 1309.0], [69.6, 1312.0], [69.7, 1314.0], [69.8, 1316.0], [69.9, 1322.0], [70.0, 1325.0], [70.1, 1328.0], [70.2, 1330.0], [70.3, 1336.0], [70.4, 1336.0], [70.5, 1341.0], [70.6, 1346.0], [70.7, 1349.0], [70.8, 1362.0], [70.9, 1363.0], [71.0, 1365.0], [71.1, 1365.0], [71.2, 1371.0], [71.3, 1372.0], [71.4, 1373.0], [71.5, 1390.0], [71.6, 1395.0], [71.7, 1401.0], [71.8, 1411.0], [71.9, 1414.0], [72.0, 1418.0], [72.1, 1424.0], [72.2, 1425.0], [72.3, 1430.0], [72.4, 1432.0], [72.5, 1436.0], [72.6, 1436.0], [72.7, 1445.0], [72.8, 1445.0], [72.9, 1459.0], [73.0, 1472.0], [73.1, 1476.0], [73.2, 1480.0], [73.3, 1486.0], [73.4, 1486.0], [73.5, 1487.0], [73.6, 1490.0], [73.7, 1491.0], [73.8, 1491.0], [73.9, 1494.0], [74.0, 1497.0], [74.1, 1516.0], [74.2, 1532.0], [74.3, 1534.0], [74.4, 1535.0], [74.5, 1546.0], [74.6, 1546.0], [74.7, 1550.0], [74.8, 1551.0], [74.9, 1554.0], [75.0, 1560.0], [75.1, 1579.0], [75.2, 1586.0], [75.3, 1588.0], [75.4, 1589.0], [75.5, 1593.0], [75.6, 1598.0], [75.7, 1599.0], [75.8, 1602.0], [75.9, 1607.0], [76.0, 1608.0], [76.1, 1608.0], [76.2, 1609.0], [76.3, 1613.0], [76.4, 1635.0], [76.5, 1635.0], [76.6, 1636.0], [76.7, 1638.0], [76.8, 1643.0], [76.9, 1650.0], [77.0, 1655.0], [77.1, 1666.0], [77.2, 1670.0], [77.3, 1673.0], [77.4, 1680.0], [77.5, 1682.0], [77.6, 1691.0], [77.7, 1692.0], [77.8, 1695.0], [77.9, 1699.0], [78.0, 1710.0], [78.1, 1714.0], [78.2, 1715.0], [78.3, 1718.0], [78.4, 1744.0], [78.5, 1745.0], [78.6, 1746.0], [78.7, 1748.0], [78.8, 1752.0], [78.9, 1755.0], [79.0, 1766.0], [79.1, 1770.0], [79.2, 1771.0], [79.3, 1773.0], [79.4, 1779.0], [79.5, 1780.0], [79.6, 1792.0], [79.7, 1796.0], [79.8, 1797.0], [79.9, 1812.0], [80.0, 1819.0], [80.1, 1824.0], [80.2, 1832.0], [80.3, 1845.0], [80.4, 1849.0], [80.5, 1851.0], [80.6, 1864.0], [80.7, 1868.0], [80.8, 1877.0], [80.9, 1893.0], [81.0, 1899.0], [81.1, 1900.0], [81.2, 1903.0], [81.3, 1905.0], [81.4, 1912.0], [81.5, 1918.0], [81.6, 1922.0], [81.7, 1939.0], [81.8, 1944.0], [81.9, 1945.0], [82.0, 1949.0], [82.1, 1949.0], [82.2, 1952.0], [82.3, 1969.0], [82.4, 1972.0], [82.5, 1993.0], [82.6, 1999.0], [82.7, 2005.0], [82.8, 2008.0], [82.9, 2009.0], [83.0, 2015.0], [83.1, 2019.0], [83.2, 2030.0], [83.3, 2031.0], [83.4, 2033.0], [83.5, 2049.0], [83.6, 2060.0], [83.7, 2063.0], [83.8, 2066.0], [83.9, 2089.0], [84.0, 2090.0], [84.1, 2100.0], [84.2, 2102.0], [84.3, 2105.0], [84.4, 2121.0], [84.5, 2122.0], [84.6, 2132.0], [84.7, 2134.0], [84.8, 2135.0], [84.9, 2139.0], [85.0, 2142.0], [85.1, 2167.0], [85.2, 2168.0], [85.3, 2177.0], [85.4, 2204.0], [85.5, 2219.0], [85.6, 2222.0], [85.7, 2245.0], [85.8, 2255.0], [85.9, 2277.0], [86.0, 2277.0], [86.1, 2295.0], [86.2, 2309.0], [86.3, 2315.0], [86.4, 2325.0], [86.5, 2361.0], [86.6, 2365.0], [86.7, 2381.0], [86.8, 2400.0], [86.9, 2404.0], [87.0, 2406.0], [87.1, 2433.0], [87.2, 2439.0], [87.3, 2455.0], [87.4, 2467.0], [87.5, 2499.0], [87.6, 2502.0], [87.7, 2504.0], [87.8, 2515.0], [87.9, 2522.0], [88.0, 2528.0], [88.1, 2536.0], [88.2, 2543.0], [88.3, 2549.0], [88.4, 2565.0], [88.5, 2566.0], [88.6, 2571.0], [88.7, 2603.0], [88.8, 2613.0], [88.9, 2613.0], [89.0, 2616.0], [89.1, 2627.0], [89.2, 2629.0], [89.3, 2637.0], [89.4, 2638.0], [89.5, 2641.0], [89.6, 2646.0], [89.7, 2646.0], [89.8, 2680.0], [89.9, 2694.0], [90.0, 2696.0], [90.1, 2704.0], [90.2, 2707.0], [90.3, 2719.0], [90.4, 2733.0], [90.5, 2748.0], [90.6, 2752.0], [90.7, 2772.0], [90.8, 2774.0], [90.9, 2792.0], [91.0, 2793.0], [91.1, 2807.0], [91.2, 2812.0], [91.3, 2844.0], [91.4, 2856.0], [91.5, 2878.0], [91.6, 2889.0], [91.7, 2893.0], [91.8, 2902.0], [91.9, 2908.0], [92.0, 2908.0], [92.1, 3013.0], [92.2, 3014.0], [92.3, 3022.0], [92.4, 3027.0], [92.5, 3051.0], [92.6, 3075.0], [92.7, 3083.0], [92.8, 3086.0], [92.9, 3094.0], [93.0, 3096.0], [93.1, 3102.0], [93.2, 3124.0], [93.3, 3138.0], [93.4, 3139.0], [93.5, 3150.0], [93.6, 3158.0], [93.7, 3163.0], [93.8, 3163.0], [93.9, 3169.0], [94.0, 3192.0], [94.1, 3195.0], [94.2, 3206.0], [94.3, 3227.0], [94.4, 3233.0], [94.5, 3239.0], [94.6, 3266.0], [94.7, 3267.0], [94.8, 3267.0], [94.9, 3291.0], [95.0, 3296.0], [95.1, 3316.0], [95.2, 3321.0], [95.3, 3329.0], [95.4, 3350.0], [95.5, 3362.0], [95.6, 3366.0], [95.7, 3379.0], [95.8, 3381.0], [95.9, 3412.0], [96.0, 3424.0], [96.1, 3432.0], [96.2, 3458.0], [96.3, 3463.0], [96.4, 3465.0], [96.5, 3504.0], [96.6, 3523.0], [96.7, 3539.0], [96.8, 3546.0], [96.9, 3563.0], [97.0, 3564.0], [97.1, 3565.0], [97.2, 3612.0], [97.3, 3612.0], [97.4, 3652.0], [97.5, 3667.0], [97.6, 3667.0], [97.7, 3674.0], [97.8, 3695.0], [97.9, 3699.0], [98.0, 3715.0], [98.1, 3730.0], [98.2, 3732.0], [98.3, 3741.0], [98.4, 3742.0], [98.5, 3765.0], [98.6, 3839.0], [98.7, 3854.0], [98.8, 3855.0], [98.9, 3864.0], [99.0, 3871.0], [99.1, 3905.0], [99.2, 3930.0], [99.3, 3956.0], [99.4, 3961.0], [99.5, 3962.0], [99.6, 3968.0], [99.7, 3970.0], [99.8, 4042.0], [99.9, 4070.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 600.0, "maxY": 256.0, "series": [{"data": [[600.0, 160.0], [700.0, 256.0], [800.0, 101.0], [900.0, 59.0], [1000.0, 47.0], [1100.0, 37.0], [1200.0, 33.0], [1300.0, 24.0], [1400.0, 24.0], [1500.0, 17.0], [1600.0, 22.0], [1700.0, 19.0], [1800.0, 12.0], [1900.0, 16.0], [2000.0, 14.0], [2100.0, 13.0], [2300.0, 6.0], [2200.0, 8.0], [2400.0, 8.0], [2500.0, 11.0], [2600.0, 14.0], [2700.0, 10.0], [2800.0, 7.0], [2900.0, 3.0], [3000.0, 10.0], [3100.0, 11.0], [3200.0, 9.0], [3300.0, 8.0], [3400.0, 6.0], [3500.0, 7.0], [3600.0, 8.0], [3700.0, 6.0], [3800.0, 5.0], [3900.0, 7.0], [4000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 53.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 713.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 713.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 234.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 53.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 128.1330000000002, "minX": 1.73280096E12, "maxY": 128.1330000000002, "series": [{"data": [[1.73280096E12, 128.1330000000002]], "isOverall": false, "label": "JmeterScripttesting", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73280096E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 621.0, "minX": 1.0, "maxY": 3961.5, "series": [{"data": [[3.0, 827.5], [4.0, 832.0], [5.0, 796.0], [6.0, 719.0], [7.0, 738.0], [8.0, 701.0], [9.0, 700.0], [10.0, 666.0], [12.0, 681.5], [13.0, 650.0], [15.0, 653.5], [16.0, 643.0], [17.0, 744.0], [18.0, 697.0], [20.0, 657.0], [21.0, 678.0], [23.0, 659.5], [24.0, 678.0], [25.0, 1159.0], [26.0, 737.0], [28.0, 729.5], [29.0, 744.0], [33.0, 737.0], [32.0, 801.0], [35.0, 764.3333333333334], [37.0, 813.0], [36.0, 789.0], [39.0, 711.0], [38.0, 844.0], [41.0, 682.0], [40.0, 693.0], [42.0, 621.0], [44.0, 672.0], [47.0, 682.0], [46.0, 683.0], [48.0, 715.0], [51.0, 681.0], [50.0, 675.5], [53.0, 643.5], [55.0, 684.0], [54.0, 677.0], [57.0, 639.0], [56.0, 717.0], [58.0, 689.0], [60.0, 679.5], [63.0, 668.0], [62.0, 686.0], [66.0, 647.0], [65.0, 697.0], [71.0, 851.8571428571428], [70.0, 765.4], [69.0, 763.0], [68.0, 702.0], [75.0, 743.9787234042553], [74.0, 784.8214285714289], [73.0, 733.5000000000001], [72.0, 749.3888888888889], [79.0, 738.1666666666666], [78.0, 788.78125], [76.0, 719.2826086956521], [77.0, 738.4651162790698], [83.0, 808.0952380952382], [82.0, 866.6470588235295], [81.0, 759.9999999999999], [80.0, 764.9999999999999], [87.0, 869.2105263157894], [86.0, 847.8333333333333], [85.0, 876.235294117647], [84.0, 902.2916666666669], [91.0, 848.0833333333334], [90.0, 885.7647058823528], [89.0, 856.0], [88.0, 805.0], [94.0, 904.0], [95.0, 1092.3333333333333], [93.0, 867.1666666666666], [92.0, 890.7272727272727], [99.0, 1041.2], [98.0, 898.3333333333334], [97.0, 1018.0], [96.0, 899.0], [102.0, 978.4285714285714], [103.0, 1167.0], [101.0, 941.5], [100.0, 926.5], [107.0, 1128.25], [106.0, 1009.4], [104.0, 1015.0], [105.0, 967.0], [111.0, 1088.3333333333333], [109.0, 1248.0], [110.0, 1065.6666666666667], [108.0, 1250.6666666666667], [114.0, 1093.6666666666667], [113.0, 1150.142857142857], [112.0, 1109.0], [115.0, 1516.0], [118.0, 1270.6666666666667], [117.0, 1113.0], [119.0, 1072.5], [116.0, 1004.6666666666666], [123.0, 1746.0], [122.0, 1140.0], [121.0, 1223.0], [120.0, 1115.0], [127.0, 1335.6666666666667], [125.0, 1373.3333333333333], [126.0, 1196.5], [124.0, 1239.0], [134.0, 1792.0], [135.0, 1400.6666666666667], [133.0, 1205.5], [131.0, 1416.0], [130.0, 1148.6666666666667], [129.0, 1567.6666666666667], [143.0, 1518.0], [141.0, 1762.5], [142.0, 2404.0], [140.0, 1807.5], [138.0, 1357.0], [137.0, 1779.0], [136.0, 1534.2], [139.0, 1151.0], [151.0, 1663.0], [150.0, 1349.0], [149.0, 1432.0], [148.0, 1739.0], [146.0, 1967.0], [147.0, 3864.0], [145.0, 2381.0], [144.0, 2601.5], [159.0, 3905.0], [158.0, 2500.75], [157.0, 1925.3333333333333], [156.0, 1966.5], [153.0, 1383.0], [152.0, 1314.0], [167.0, 3150.0], [164.0, 3310.0], [162.0, 3866.25], [161.0, 2624.0], [160.0, 2961.0], [175.0, 3162.75], [174.0, 3423.0], [173.0, 3278.5], [171.0, 3258.5], [169.0, 2924.6666666666665], [172.0, 3956.0], [168.0, 3961.5], [183.0, 3219.5], [182.0, 2640.75], [181.0, 3192.8], [179.0, 2212.3333333333335], [178.0, 3691.0], [177.0, 2302.0], [190.0, 2483.0], [188.0, 1291.0], [187.0, 3083.0], [186.0, 2774.0], [185.0, 3742.0], [184.0, 1336.0], [199.0, 1372.0], [197.0, 1326.5], [196.0, 1395.0], [195.0, 963.3333333333334], [193.0, 776.0], [192.0, 733.0], [204.0, 1390.0], [200.0, 1280.5], [215.0, 1786.75], [213.0, 1588.5], [211.0, 1944.0], [210.0, 1458.5], [208.0, 2239.2], [209.0, 1634.0], [223.0, 1248.0], [222.0, 758.0], [220.0, 1971.25], [219.0, 1279.0], [217.0, 2135.3333333333335], [231.0, 1329.3333333333333], [229.0, 1969.0], [228.0, 2299.666666666667], [225.0, 1379.6666666666667], [224.0, 1599.0], [239.0, 1771.0], [238.0, 1114.5], [237.0, 1295.0], [236.0, 3350.0], [235.0, 1365.0], [233.0, 2574.5], [232.0, 2720.5], [247.0, 1192.3333333333333], [245.0, 2017.0], [243.0, 1795.0], [241.0, 1226.5], [240.0, 972.0], [254.0, 2783.5], [252.0, 2169.3333333333335], [251.0, 3254.0], [250.0, 2561.0], [249.0, 2576.25], [248.0, 1491.0], [271.0, 2146.0], [269.0, 2371.5], [259.0, 2167.0], [258.0, 1754.6666666666667], [256.0, 2776.5], [267.0, 2733.0], [266.0, 3096.0], [265.0, 1160.5], [264.0, 1985.1666666666667], [263.0, 2489.0], [262.0, 1287.0], [260.0, 2613.0], [286.0, 1911.3333333333333], [284.0, 1861.0], [275.0, 2368.5], [283.0, 1588.0], [282.0, 3267.0], [281.0, 2499.0], [280.0, 2033.3333333333333], [276.0, 2217.25], [274.0, 1725.0], [277.0, 1877.0], [273.0, 3009.0], [272.0, 3206.0], [302.0, 1945.0], [300.0, 1768.5], [298.0, 3195.0], [297.0, 2504.0], [296.0, 2613.0], [294.0, 2514.0], [292.0, 2261.25], [288.0, 2492.3333333333335], [318.0, 2515.0], [319.0, 1459.0], [317.0, 2202.5], [307.0, 2938.0], [311.0, 3075.0], [306.0, 1694.4], [305.0, 2110.5714285714284], [315.0, 1893.0], [314.0, 2479.5], [313.0, 1922.0], [312.0, 3094.0], [310.0, 1721.0], [309.0, 2431.5], [308.0, 2361.3333333333335], [325.0, 2567.4], [326.0, 2507.5], [322.0, 1492.0], [321.0, 2342.0], [323.0, 2774.0], [320.0, 2100.5], [1.0, 1184.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[128.1330000000002, 1290.4379999999994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 326.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3466.6666666666665, "minX": 1.73280096E12, "maxY": 119215.21666666666, "series": [{"data": [[1.73280096E12, 119215.21666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73280096E12, 3466.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73280096E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1290.4379999999994, "minX": 1.73280096E12, "maxY": 1290.4379999999994, "series": [{"data": [[1.73280096E12, 1290.4379999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73280096E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1286.1699999999992, "minX": 1.73280096E12, "maxY": 1286.1699999999992, "series": [{"data": [[1.73280096E12, 1286.1699999999992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73280096E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 687.0500000000001, "minX": 1.73280096E12, "maxY": 687.0500000000001, "series": [{"data": [[1.73280096E12, 687.0500000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73280096E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 608.0, "minX": 1.73280096E12, "maxY": 4070.0, "series": [{"data": [[1.73280096E12, 4070.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73280096E12, 608.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73280096E12, 2682.8000000000006]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73280096E12, 3888.6799999999994]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73280096E12, 871.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.73280096E12, 3267.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73280096E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 709.0, "minX": 5.0, "maxY": 2949.5, "series": [{"data": [[131.0, 2066.0], [138.0, 968.0], [5.0, 832.0], [92.0, 750.0], [100.0, 752.5], [101.0, 709.0], [226.0, 1903.0], [115.0, 709.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[131.0, 2949.5], [226.0, 1390.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 707.0, "minX": 5.0, "maxY": 2949.5, "series": [{"data": [[131.0, 2061.0], [138.0, 967.0], [5.0, 828.0], [92.0, 748.0], [100.0, 747.5], [101.0, 708.0], [226.0, 1900.0], [115.0, 707.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[131.0, 2949.5], [226.0, 1389.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.73280096E12, "maxY": 16.666666666666668, "series": [{"data": [[1.73280096E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73280096E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.73280096E12, "maxY": 15.783333333333333, "series": [{"data": [[1.73280096E12, 15.783333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.73280096E12, 0.8833333333333333]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73280096E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.73280096E12, "maxY": 15.783333333333333, "series": [{"data": [[1.73280096E12, 15.783333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.73280096E12, 0.8833333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73280096E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.73280096E12, "maxY": 15.783333333333333, "series": [{"data": [[1.73280096E12, 15.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.73280096E12, 0.8833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73280096E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

