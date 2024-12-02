//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 100% SURE AMPLITUDE IS WORKING NOT SURE ABOUT RB2B
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "use client";

// import React, { useEffect } from "react";
// import Head from "next/head";

// const MyScript = () => {
//   useEffect(() => {
//     // Function to create and append a script to the document head
//     const appendScript = (src, onLoad) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.async = true;
//       script.onload = onLoad;
//       document.head.appendChild(script);
//     };

//     // Initialize reb2b
//     const reb2bScriptContent = `!function () {
//       var reb2b = window.reb2b = window.reb2b || [];
//       if (reb2b.invoked) return;
//       reb2b.invoked = true;
//       reb2b.methods = ["identify", "collect"];
//       reb2b.factory = function (method) {
//         return function () {
//           var args = Array.prototype.slice.call(arguments);
//           args.unshift(method);
//           reb2b.push(args);
//           return reb2b;
//         };
//       };
//       for (var i = 0; i < reb2b.methods.length; i++) {
//         var key = reb2b.methods[i];
//         reb2b[key] = reb2b.factory(key);
//       }
//       reb2b.SNIPPET_VERSION = "1.0.1";
//     }();`;

//     const reb2bScript = document.createElement("script");
//     reb2bScript.type = "text/javascript";
//     reb2bScript.async = true;
//     reb2bScript.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/LNKLDHMP98OJ/reb2b.js.gz";
//     document.head.appendChild(reb2bScript);

//     // Append reb2b inline script
//     const inlineScript = document.createElement("script");
//     inlineScript.type = "text/javascript";
//     inlineScript.text = reb2bScriptContent;
//     document.head.appendChild(inlineScript);

//     // Load Amplitude scripts and initialize
//     appendScript("https://cdn.amplitude.com/libs/analytics-browser-2.7.4-min.js.gz", () => {
//       appendScript("https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.6.8-min.js.gz", () => {
//         appendScript("https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.0-min.js.gz", () => {
//           if (window.amplitude && window.sessionReplay && window.amplitudeAutocapturePlugin) {
//             window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }))
//               .promise.then(() => {
//                 window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());
//                 window.amplitude.init('cfb61aa3732d4b24ec4ac3028647a820');
//               });
//           }
//         });
//       });
//     });

//     return () => {
//       document.head.removeChild(reb2bScript);
//       document.head.removeChild(inlineScript);
//     };
//   }, []);

//   return (
//     <Head>
//       {/* Additional meta tags or other head elements can be added here */}
//     </Head>
//   );
// };

// export default MyScript;



"use client";

import React, { useEffect } from "react";
import Head from "next/head";

const MyScript = () => {
  useEffect(() => {
    const appendScript = (src, onLoad) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.head.appendChild(script);
    };

   /*  const reb2bScriptContent = `!function () {
      var reb2b = window.reb2b = window.reb2b || [];
      if (reb2b.invoked) return;
      reb2b.invoked = true;
      reb2b.methods = ["identify", "collect"];
      reb2b.factory = function (method) {
        return function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          reb2b.push(args);
          return reb2b;
        };
      };
      for (var i = 0; i < reb2b.methods.length; i++) {
        var key = reb2b.methods[i];
        reb2b[key] = reb2b.factory(key);
      }
      reb2b.SNIPPET_VERSION = "1.0.1";
      console.log('Reb2b script initialized.');
    }();
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/LNKLDHMP98OJ/reb2b.js.gz";
    script.onload = function() {
      console.log('Reb2b external script loaded.');
      if (window.reb2b && typeof window.reb2b.push === 'function') {
        window.reb2b.collect('page_view', { page: '/home' });
        console.log('Reb2b identify and collect methods called.');
      } else {
        console.error('Reb2b object is not correctly initialized or push is not a function.');
      }
    };
    document.head.appendChild(script);`;

    const appendInlineScript = (content) => {
      const script = document.createElement("script");
      script.innerHTML = content;
      document.head.appendChild(script);
    };

    appendInlineScript(reb2bScriptContent); */

    appendScript("https://cdn.amplitude.com/libs/analytics-browser-2.7.4-min.js.gz", () => {
      console.log('Amplitude analytics script loaded.');
      appendScript("https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.6.8-min.js.gz", () => {
        console.log('Amplitude session replay script loaded.');
        appendScript("https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.0-min.js.gz", () => {
          console.log('Amplitude autocapture script loaded.');
          if (window.amplitude && window.sessionReplay) {
            window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 })).promise.then(function() {
              if (window.amplitudeAutocapturePlugin) {
                window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());
                window.amplitude.init('cfb61aa3732d4b24ec4ac3028647a820');
                console.log('Amplitude initialized.');
              } else {
                console.error('window.amplitudeAutocapturePlugin is not defined');
              }
            }).catch((error) => {
              console.error('Error initializing Amplitude:', error);
            });
          } else {
            console.error('window.amplitude or window.sessionReplay is not defined');
          }
        });
      });
    });
  }, []);

  return <Head />;
};

export default MyScript;
