import * as XLSX from 'xlsx'

export class ExcelService {
  static toExportFileName (excelFileName: string): string {
    return `${excelFileName}.xlsx`
  }

  public exportAsExcelFile (json: any[], excelFileName: string): void {
    const worksheet: any = XLSX.utils.json_to_sheet(json)
    const workbook: any = { Sheets: { 'data': worksheet }, SheetNames: ['data'] }
    XLSX.writeFile(workbook, ExcelService.toExportFileName(excelFileName))
  }
}
