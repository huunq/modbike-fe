function getAxiosErrorFormat(error) {
    return `
      AXIOS ERROR !!
          [ status ]  ${error.response ? error.response.status : ""}
          [ error  ]  ${error.message}
          [ method ]  ${error.config.method}
          [ url    ]  ${error.config.url}
          [ time   ]  ${new Date()}
      `;
  }
  
  export function logAxiosError(error) {
    console.error(getAxiosErrorFormat(error));
  }