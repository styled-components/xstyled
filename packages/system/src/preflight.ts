import { th } from './th'

export const createPreflight = ({
  createGlobalStyle,
}: {
  createGlobalStyle: Function
}) => {
  return createGlobalStyle`
    /*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */
    *,::after,::before{box-sizing:border-box}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}

    /* Role button pointer */
    [role=button], button {
      cursor: pointer;
    }

    /* Remove default margins */
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    /* Remove headings styles */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    /* Unstyle lists */
    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    /* Image are block-level */
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }

    /* Reset border styles */
    *,
    ::before,
    ::after {
      border-width: 0;
      border-style: solid;
      border-color: ${th.color('default-border-color', 'currentColor')};
    }

    * {
      --x-ring-color: ${th.color('default-ring-color', 'rgba(59,130,246,0.5)')};
    }

    /* Default outline on buttons */
    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }

    // Animations
    @keyframes x-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes x-ping {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes x-pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }

    @keyframes x-bounce {
      0%, 100% {
        transform: translateY(-25%);
        animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  `
}
