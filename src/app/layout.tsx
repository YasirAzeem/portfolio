import type { Metadata } from "next";
import { Roboto, Sora, Raleway, Preahvihear, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar/NAvbax";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import Script from "next/script";
import IntercomClientComponent from "./IntercomClientComponent";
import dynamic from 'next/dynamic'
import { PHProvider } from "./PostHogProvider";
import { Toaster } from "@/components/ui/toaster";


const PostHogPageView = dynamic(() => import('../components/PostHogPageView'), {
  ssr: false,
})

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const sora = Sora({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const preahvihear = Preahvihear({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-preahvihear",
  display: "swap",
});

export const raleway = Raleway({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const sabor = localFont({
  src: "../../public/fonts/Sabor-SSK.ttf",
  variable: "--font-sabor",
});

export const saborDisplaySSK = localFont({
  src: "../../public/fonts/SaborDisplaySSK.ttf",
  variable: "--font-saborDisplaySSK",
});

const inter = Inter({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProgrammX",
  description: "Unlocking Ideas with Intelligent Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <Script
          id="rb2b-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function () {
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
              reb2b.load = function (key) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                var first = document.getElementsByTagName("script")[0];
                first.parentNode.insertBefore(script, first);
              };
              reb2b.SNIPPET_VERSION = "1.0.1";
              reb2b.load("LNKLDHMP98OJ");
            }();`,
          }}
        /> */}
        <script
      dangerouslySetInnerHTML={{
        __html: `!function () {
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
          reb2b.load = function (key) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
            var first = document.getElementsByTagName("script")[0];
            first.parentNode.insertBefore(script, first);
          };
          reb2b.SNIPPET_VERSION = "1.0.1";
          reb2b.load("LNKLDHMP98OJ");
        }();`
      }}
    ></script>

         {/*  <Script
            dangerouslySetInnerHTML={{
              __html: `
            !function () {
              var reb2b = window.reb2b = window.reb2b || [];
              if (reb2b.invoked) return;
              reb2b.invoked = true;
              reb2b.methods = ["identify", "collect"];
              reb2b.factory = function (method) {
                return function () {
                  var args = Array.prototype.slice.call(arguments);
                  args.unshift(method);reb2b.push(args);
                  return reb2b;
                };
              };
              for (var i = 0; i < reb2b.methods.length; i++) {
                var key = reb2b.methods[i];
                reb2b[key] = reb2b.factory(key);
              }
              reb2b.load = function (key) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                var first = document.getElementsByTagName("script")[0];
                first.parentNode.insertBefore(script, first);
              };
              reb2b.SNIPPET_VERSION = "1.0.1";
              reb2b.load("LNKLDHMP98OJ");
            }();
          `,
            }}
          /> */}
            <Script
              id="redditPixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_fht9vsqybacx');`,
              }}
            ></Script>

      {/* <Script
        strategy="afterInteractive"
        id="intercom-settings"
        dangerouslySetInnerHTML={{
            __html: `
                        window.intercomSettings = {
                            api_base: "https://api-iam.intercom.io",
                            app_id: "ulffcqru", // Ensure this matches your actual Intercom app ID.
                        };
                    `
        }}
    ></Script> */}

{/* <Script
  dangerouslySetInnerHTML={{
    __html: `
 window.intercomSettings = {
    app_id: "YOUR_APP_ID",
  };`}} >
</Script>
<Script
dangerouslySetInnerHTML={{
  __html: `(function(){
      var w=window;
      var ic=w.Intercom;
      if(typeof ic==="function"){
          ic('reattach_activator');
          ic('update',w.intercomSettings);
      }else{
          var d=document;
          var i=function(){i.c(arguments)};
          i.q=[];
          i.c=function(args){i.q.push(args)};
          w.Intercom=i;
          var l=function(){
              var s=d.createElement('script');
              s.type='text/javascript';
              s.async=true;
              s.src='https://widget.intercom.io/widget/YOUR_APP_ID';
              var x=d.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s,x);
          };
          if(document.readyState==='complete'){l();}
          else if(w.attachEvent){w.attachEvent('onload',l);}
          else{w.addEventListener('load',l,false);}
      }
  })()`
}} ></Script> */}
        
          <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        </head>
      <body
        className={` ${roboto.className} ${sora.variable} ${preahvihear.variable} ${sabor.variable} ${saborDisplaySSK.variable} ${raleway.className} ${inter.className}`} 
      >
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PHProvider>
            <div className="w-full flex flex-col min-h-dvh h-full bg-[#000000] gap-3 dark:bg-[#000000]">
              {/* <PostHogPageView /> */}
             {/*  <IntercomClientComponent />   */}
              <Toaster />
            <TopNav /> 
            {children} 
            </div>
            </PHProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
