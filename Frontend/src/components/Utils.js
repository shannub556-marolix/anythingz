

const DATE_STD_PATTERN = 'YYYY-MM-DD';
const DATE_STD_PATTERN2 = 'DD-MM-YYYY';
class Utils{
    
    static getDate(strMessageDate) {
        let dateStr = null;
        try {
          const date = new Date(strMessageDate.replace('T', ' ').replace('Z', ''));
          if (!isNaN(date.getTime())) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            dateStr = `${year}-${month}-${day}`;
          }
        } catch (e) {
          console.error(e);
        }
        return dateStr;
      }


    //   static getDateformat2(strMessageDate) {
    //     let dateStr = null;
    //     try {
    //       const date = moment(strMessageDate, this.DATE_PATTERN);
    //       dateStr = date.format(this.DATE_STD_PATTERN2);
    //     } catch (e) {
    //       console.error(e);
    //     }
    //     return dateStr;
    //   }
}

  export default Utils;