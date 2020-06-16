const storageQuota = 1000000000;

const { log } = console;

function useBrowser() {
  function isIncognito() {
    return new Promise((resolve, reject) => {
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then((res) => {
          if (res?.quota && res?.quota < storageQuota) {
            log('Incognito mode is ON, quota: ', res?.quota);
            resolve(true);
          } else {
            log('Incognito mode is OFF, quota: ', res?.quota);
            reject(false);
          }
        });
      } else {
        reject(false);
      }
    });
  }

  return { isIncognito };
}

export { useBrowser };
