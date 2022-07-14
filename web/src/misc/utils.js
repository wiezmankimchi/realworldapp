export const timeTag =  (value ) => {
  if ( value ) {
    const currentTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[ 0 ]
        : navigator.language
    const valueDate = new Date( value )
    return valueDate.toLocaleString( userLocale, { timeZone: currentTZ } )
  }
}