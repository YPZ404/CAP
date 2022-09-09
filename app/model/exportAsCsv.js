import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/**
 *
 * @param fileName local file to write map contents to
 * @param mapping mapping of column headings to values
 * @param vomsMapping
 * @param shareDialog dialog is share prompt on Android
 * @return {Promise<void>}
 */
const exportMapAsCsv = async (
  fileName,
  medical_tests
) => {
  if (!(await Sharing.isAvailableAsync())) {
    // eslint-disable-next-line no-alert
    alert(`Sharing files isn't available on your platform`);
    return;
  }

  // Write csv file using object
  const filePath = `${FileSystem.cacheDirectory}/${fileName}.csv`;

  let attributes = '';
  let values = '';
  let first = true;
  console.log('Tests',medical_tests);
  let totalContents = '';
  totalContents = totalContents.concat('test,result', '\n');
  console.log(totalContents);
  let medical_test_content = '';

  Object.entries(medical_tests).forEach(([key, value]) => {
    let sep = ',';
    let end = '\n';
    if (key != 'report_id'){
      medical_test_content = medical_test_content.concat(key,sep,value,end); 
    }
    
  });

  totalContents = totalContents.concat(medical_test_content);


  await FileSystem.writeAsStringAsync(filePath, totalContents);

  // Share file
  await Sharing.shareAsync(filePath);
};

export { exportMapAsCsv };
