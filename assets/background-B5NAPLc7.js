var c=document.getElementById("background");window.config={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:11,g:11,b:10},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.4,BLOOM_THRESHOLD:.8,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function x(){if(!x.switched){var e={intro:$(".content-intro"),path:$(".shape-wrap path"),shape:$("svg.shape")};e.shape.style.transformOrigin="50% 0%",anime({targets:e.intro,duration:1100,easing:"easeInOutSine",translateY:"-200vh"}),anime({targets:e.shape,scaleY:[{value:[.8,1.8],duration:550,easing:"easeInQuad"},{value:1,duration:550,easing:"easeOutQuad"}]}),anime({targets:e.path,duration:1100,easing:"easeOutQuad",d:e.path.getAttribute("pathdata:id"),complete:function(){c&&(cancelAnimationFrame(he),c.parentElement.removeChild(c),c=null)}}),x.switched=!0}}function ve(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Ee(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function ce(e,n,i){return n&&Ee(e.prototype,n),e}function W(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}Te();var E=[],K=[];E.push(new W);var fe=Re(c),r=fe.gl,p=fe.ext;function Re(e){var n,i,t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},a=e.getContext("webgl2",t),o=!!a;o||(a=e.getContext("webgl",t)||e.getContext("experimental-webgl",t)),i=o?(a.getExtension("EXT_color_buffer_float"),a.getExtension("OES_texture_float_linear")):(n=a.getExtension("OES_texture_half_float"),a.getExtension("OES_texture_half_float_linear")),a.clearColor(0,0,0,1);var u,l,f,T=o?a.HALF_FLOAT:n.HALF_FLOAT_OES;return f=o?(u=w(a,a.RGBA16F,a.RGBA,T),l=w(a,a.RG16F,a.RG,T),w(a,a.R16F,a.RED,T)):(u=w(a,a.RGBA,a.RGBA,T),l=w(a,a.RGBA,a.RGBA,T),w(a,a.RGBA,a.RGBA,T)),{gl:a,ext:{formatRGBA:u,formatRG:l,formatR:f,halfFloatTexType:T,supportLinearFiltering:i}}}function w(e,n,i,t){if(!Se(e,n,i,t))switch(n){case e.R16F:return w(e,e.RG16F,e.RG,t);case e.RG16F:return w(e,e.RGBA16F,e.RGBA,t);default:return null}return{internalFormat:n,format:i}}function Se(e,n,i,t){var a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,n,4,4,0,i,t,null);var o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}function De(){return/Mobi|Android/i.test(navigator.userAgent)}De()&&(config.DYE_RESOLUTION=512),p.supportLinearFiltering||(config.DYE_RESOLUTION=512,config.SHADING=!1,config.BLOOM=!1,config.SUNRAYS=!1);var Ae=function(){function e(n,i){ve(this,e),this.vertexShader=n,this.fragmentShaderSource=i,this.programs=[],this.activeProgram=null,this.uniforms=[]}return ce(e,[{key:"setKeywords",value:function(n){for(var i=0,t=0;t<n.length;t++)i+=hr(n[t]);var a=this.programs[i];if(a==null){var o=s(r.FRAGMENT_SHADER,this.fragmentShaderSource,n);a=le(this.vertexShader,o),this.programs[i]=a}a!=this.activeProgram&&(this.uniforms=me(a),this.activeProgram=a)}},{key:"bind",value:function(){r.useProgram(this.activeProgram)}}]),e}(),h=function(){function e(n,i){ve(this,e),this.uniforms={},this.program=le(n,i),this.uniforms=me(this.program)}return ce(e,[{key:"bind",value:function(){r.useProgram(this.program)}}]),e}();function le(e,n){var i=r.createProgram();if(r.attachShader(i,e),r.attachShader(i,n),r.linkProgram(i),!r.getProgramParameter(i,r.LINK_STATUS))throw r.getProgramInfoLog(i);return i}function me(e){for(var n=[],i=r.getProgramParameter(e,r.ACTIVE_UNIFORMS),t=0;t<i;t++){var a=r.getActiveUniform(e,t).name;n[a]=r.getUniformLocation(e,a)}return n}function s(e,n,i){n=ye(n,i);var t=r.createShader(e);if(r.shaderSource(t,n),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS))throw r.getShaderInfoLog(t);return t}function ye(e,n){if(n==null)return e;var i="";return n.forEach(function(t){i+="#define "+t+`
`}),i+e}var d,v,q,Q,_,j,M,se,g=s(r.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),_e=s(r.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),be=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),we=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),Ue=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),Le=s(r.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),Fe=s(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;

    #define SCALE 25.0

    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),Oe=`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,Be=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),Pe=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),Ne=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),Ie=s(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),Me=s(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),Ce=s(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),Xe=s(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,p.supportLinearFiltering?null:["MANUAL_FILTERING"]),ze=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),Ge=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),Ye=s(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
`),He=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),Ve=s(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),m=(r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),r.STATIC_DRAW),r.vertexAttribPointer(0,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(0),function(e){r.bindFramebuffer(r.FRAMEBUFFER,e),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)}),U=[],Z=qe(""),F=new h(_e,be),ee=new h(g,we),X=new h(g,Ue),re=new h(g,Le),ne=new h(g,Fe),B=new h(g,Be),O=new h(g,Pe),P=new h(g,Ne),ie=new h(g,Ie),z=new h(g,Me),y=new h(g,Ce),R=new h(g,Xe),G=new h(g,ze),Y=new h(g,Ge),L=new h(g,Ye),N=new h(g,He),I=new h(g,Ve),b=new Ae(g,Oe);function de(){var e=C(config.SIM_RESOLUTION),n=C(config.DYE_RESOLUTION),i=p.halfFloatTexType,t=p.formatRGBA,a=p.formatRG,o=p.formatR,u=p.supportLinearFiltering?r.LINEAR:r.NEAREST;d=d==null?H(n.width,n.height,t.internalFormat,t.format,i,u):te(d,n.width,n.height,t.internalFormat,t.format,i,u),v=v==null?H(e.width,e.height,a.internalFormat,a.format,i,u):te(v,e.width,e.height,a.internalFormat,a.format,i,u),q=D(e.width,e.height,o.internalFormat,o.format,i,r.NEAREST),Q=D(e.width,e.height,o.internalFormat,o.format,i,r.NEAREST),_=H(e.width,e.height,o.internalFormat,o.format,i,r.NEAREST),ke(),We()}function ke(){var e=C(config.BLOOM_RESOLUTION),n=p.halfFloatTexType,i=p.formatRGBA,t=p.supportLinearFiltering?r.LINEAR:r.NEAREST;j=D(e.width,e.height,i.internalFormat,i.format,n,t);for(var a=U.length=0;a<config.BLOOM_ITERATIONS;a++){var o=e.width>>a+1,u=e.height>>a+1;if(o<2||u<2)break;var l=D(o,u,i.internalFormat,i.format,n,t);U.push(l)}}function We(){var e=C(config.SUNRAYS_RESOLUTION),n=p.halfFloatTexType,i=p.formatR,t=p.supportLinearFiltering?r.LINEAR:r.NEAREST;M=D(e.width,e.height,i.internalFormat,i.format,n,t),se=D(e.width,e.height,i.internalFormat,i.format,n,t)}function D(e,n,i,t,a,o){r.activeTexture(r.TEXTURE0);var u=r.createTexture();r.bindTexture(r.TEXTURE_2D,u),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,i,e,n,0,t,a,null);var l=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,l),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,u,0),r.viewport(0,0,e,n),r.clear(r.COLOR_BUFFER_BIT),{texture:u,fbo:l,width:e,height:n,texelSizeX:1/e,texelSizeY:1/n,attach:function(f){return r.activeTexture(r.TEXTURE0+f),r.bindTexture(r.TEXTURE_2D,u),f}}}function H(e,n,i,t,a,o){var u=D(e,n,i,t,a,o),l=D(e,n,i,t,a,o);return{width:e,height:n,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(f){u=f},get write(){return l},set write(f){l=f},swap:function(){var f=u;u=l,l=f}}}function Ke(e,n,i,t,a,o,u){var l=D(n,i,t,a,o,u);return ee.bind(),r.uniform1i(ee.uniforms.uTexture,e.attach(0)),m(l.fbo),l}function te(e,n,i,t,a,o,u){return e.width==n&&e.height==i||(e.read=Ke(e.read,n,i,t,a,o,u),e.write=D(n,i,t,a,o,u),e.width=n,e.height=i,e.texelSizeX=1/n,e.texelSizeY=1/i),e}function qe(e){var n=r.createTexture();r.bindTexture(r.TEXTURE_2D,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.REPEAT),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.REPEAT),r.texImage2D(r.TEXTURE_2D,0,r.RGB,1,1,0,r.RGB,r.UNSIGNED_BYTE,new Uint8Array([255,255,255]));var i={texture:n,width:1,height:1,attach:function(a){return r.activeTexture(r.TEXTURE0+a),r.bindTexture(r.TEXTURE_2D,n),a}},t=new Image;return t.onload=function(){i.width=t.width,i.height=t.height,r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,t)},t.src=e,i}function Qe(){var e=[];config.SHADING&&e.push("SHADING"),config.BLOOM&&e.push("BLOOM"),config.SUNRAYS&&e.push("SUNRAYS"),b.setKeywords(e)}var ae=Date.now(),V=0;window.initBackground=function e(){e.loaded||(e.loaded=!0,Qe(),de(),pe(parseInt(20*Math.random())+5),ge())};window.addEventListener("visibilityChangeEvent",window.initBackground),window.addEventListener("DOMContentLoaded",window.initBackground);var he=null;function ge(e){var n=$e();Te()&&de(),je(n),Je(),config.PAUSED||Ze(n),er(),he=requestAnimationFrame(ge)}function $e(){var e=Date.now(),n=(e-ae)/1e3;return n=Math.min(n,.016666),ae=e,n}function Te(){var e=S(c.clientWidth),n=S(c.clientHeight);return(c.width!==e||c.height!==n)&&(c.width=e,c.height=n,!0)}function je(e){config.COLORFUL&&(V+=e*config.COLOR_UPDATE_SPEED)>=1&&(V=sr(V,0,1),E.forEach(function(n){n.color=J()}))}function Je(){K.length>0&&pe(K.pop()),E.forEach(function(e){e.moved&&(e.moved=!1,ur(e))})}function Ze(e){r.disable(r.BLEND),r.viewport(0,0,v.width,v.height),Y.bind(),r.uniform2f(Y.uniforms.texelSize,v.texelSizeX,v.texelSizeY),r.uniform1i(Y.uniforms.uVelocity,v.read.attach(0)),m(Q.fbo),L.bind(),r.uniform2f(L.uniforms.texelSize,v.texelSizeX,v.texelSizeY),r.uniform1i(L.uniforms.uVelocity,v.read.attach(0)),r.uniform1i(L.uniforms.uCurl,Q.attach(1)),r.uniform1f(L.uniforms.curl,config.CURL),r.uniform1f(L.uniforms.dt,e),m(v.write.fbo),v.swap(),G.bind(),r.uniform2f(G.uniforms.texelSize,v.texelSizeX,v.texelSizeY),r.uniform1i(G.uniforms.uVelocity,v.read.attach(0)),m(q.fbo),X.bind(),r.uniform1i(X.uniforms.uTexture,_.read.attach(0)),r.uniform1f(X.uniforms.value,config.PRESSURE),m(_.write.fbo),_.swap(),N.bind(),r.uniform2f(N.uniforms.texelSize,v.texelSizeX,v.texelSizeY),r.uniform1i(N.uniforms.uDivergence,q.attach(0));for(var n=0;n<config.PRESSURE_ITERATIONS;n++)r.uniform1i(N.uniforms.uPressure,_.read.attach(1)),m(_.write.fbo),_.swap();I.bind(),r.uniform2f(I.uniforms.texelSize,v.texelSizeX,v.texelSizeY),r.uniform1i(I.uniforms.uPressure,_.read.attach(0)),r.uniform1i(I.uniforms.uVelocity,v.read.attach(1)),m(v.write.fbo),v.swap(),R.bind(),r.uniform2f(R.uniforms.texelSize,v.texelSizeX,v.texelSizeY),p.supportLinearFiltering||r.uniform2f(R.uniforms.dyeTexelSize,v.texelSizeX,v.texelSizeY);var i=v.read.attach(0);r.uniform1i(R.uniforms.uVelocity,i),r.uniform1i(R.uniforms.uSource,i),r.uniform1f(R.uniforms.dt,e),r.uniform1f(R.uniforms.dissipation,config.VELOCITY_DISSIPATION),m(v.write.fbo),v.swap(),r.viewport(0,0,d.width,d.height),p.supportLinearFiltering||r.uniform2f(R.uniforms.dyeTexelSize,d.texelSizeX,d.texelSizeY),r.uniform1i(R.uniforms.uVelocity,v.read.attach(0)),r.uniform1i(R.uniforms.uSource,d.read.attach(1)),r.uniform1f(R.uniforms.dissipation,config.DENSITY_DISSIPATION),m(d.write.fbo),d.swap()}function er(e){config.BLOOM&&tr(d.read,j),config.SUNRAYS&&(ar(d.read,d.write,M),or(M,se,1)),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.enable(r.BLEND);var n=r.drawingBufferWidth,i=r.drawingBufferHeight;r.viewport(0,0,n,i);var t=null;config.TRANSPARENT||rr(t,mr(config.BACK_COLOR)),config.TRANSPARENT&&nr(t),ir(t,n,i)}function rr(e,n){re.bind(),r.uniform4f(re.uniforms.color,n.r,n.g,n.b,1),m(e)}function nr(e){ne.bind(),r.uniform1f(ne.uniforms.aspectRatio,c.width/c.height),m(e)}function ir(e,n,i){if(b.bind(),config.SHADING&&r.uniform2f(b.uniforms.texelSize,1/n,1/i),r.uniform1i(b.uniforms.uTexture,d.read.attach(0)),config.BLOOM){r.uniform1i(b.uniforms.uBloom,j.attach(1)),r.uniform1i(b.uniforms.uDithering,Z.attach(2));var t=dr(Z,n,i);r.uniform2f(b.uniforms.ditherScale,t.x,t.y)}config.SUNRAYS&&r.uniform1i(b.uniforms.uSunrays,M.attach(3)),m(e)}function tr(e,n){if(!(U.length<2)){var i=n;r.disable(r.BLEND),B.bind();var t=config.BLOOM_THRESHOLD*config.BLOOM_SOFT_KNEE+1e-4,a=config.BLOOM_THRESHOLD-t,o=2*t,u=.25/t;r.uniform3f(B.uniforms.curve,a,o,u),r.uniform1f(B.uniforms.threshold,config.BLOOM_THRESHOLD),r.uniform1i(B.uniforms.uTexture,e.attach(0)),r.viewport(0,0,i.width,i.height),m(i.fbo),O.bind();for(var l=0;l<U.length;l++){var f=U[l];r.uniform2f(O.uniforms.texelSize,i.texelSizeX,i.texelSizeY),r.uniform1i(O.uniforms.uTexture,i.attach(0)),r.viewport(0,0,f.width,f.height),m(f.fbo),i=f}r.blendFunc(r.ONE,r.ONE),r.enable(r.BLEND);for(var T=U.length-2;T>=0;T--){var A=U[T];r.uniform2f(O.uniforms.texelSize,i.texelSizeX,i.texelSizeY),r.uniform1i(O.uniforms.uTexture,i.attach(0)),r.viewport(0,0,A.width,A.height),m(A.fbo),i=A}r.disable(r.BLEND),P.bind(),r.uniform2f(P.uniforms.texelSize,i.texelSizeX,i.texelSizeY),r.uniform1i(P.uniforms.uTexture,i.attach(0)),r.uniform1f(P.uniforms.intensity,config.BLOOM_INTENSITY),r.viewport(0,0,n.width,n.height),m(n.fbo)}}function ar(e,n,i){r.disable(r.BLEND),ie.bind(),r.uniform1i(ie.uniforms.uTexture,e.attach(0)),r.viewport(0,0,n.width,n.height),m(n.fbo),z.bind(),r.uniform1f(z.uniforms.weight,config.SUNRAYS_WEIGHT),r.uniform1i(z.uniforms.uTexture,n.attach(0)),r.viewport(0,0,i.width,i.height),m(i.fbo)}function or(e,n,i){F.bind();for(var t=0;t<i;t++)r.uniform2f(F.uniforms.texelSize,e.texelSizeX,0),r.uniform1i(F.uniforms.uTexture,e.attach(0)),m(n.fbo),r.uniform2f(F.uniforms.texelSize,0,e.texelSizeY),r.uniform1i(F.uniforms.uTexture,n.attach(0)),m(e.fbo)}function ur(e){var n=e.deltaX*config.SPLAT_FORCE,i=e.deltaY*config.SPLAT_FORCE;xe(e.texcoordX,e.texcoordY,n,i,e.color)}function pe(e){for(var n=0;n<e;n++){var i=J();i.r*=10,i.g*=10,i.b*=10,xe(Math.random(),Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),i)}}function xe(e,n,i,t,a){r.viewport(0,0,v.width,v.height),y.bind(),r.uniform1i(y.uniforms.uTarget,v.read.attach(0)),r.uniform1f(y.uniforms.aspectRatio,c.width/c.height),r.uniform2f(y.uniforms.point,e,n),r.uniform3f(y.uniforms.color,i,t,0),r.uniform1f(y.uniforms.radius,vr(config.SPLAT_RADIUS/100)),m(v.write.fbo),v.swap(),r.viewport(0,0,d.width,d.height),r.uniform1i(y.uniforms.uTarget,d.read.attach(0)),r.uniform3f(y.uniforms.color,a.r,a.g,a.b),m(d.write.fbo),d.swap()}function vr(e){var n=c.width/c.height;return n>1&&(e*=n),e}function oe(e,n,i,t){e.id=n,e.down=!0,e.moved=!1,e.texcoordX=i/c.width,e.texcoordY=1-t/c.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=J()}function ue(e,n,i){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=n/c.width,e.texcoordY=1-i/c.height,e.deltaX=cr(e.texcoordX-e.prevTexcoordX),e.deltaY=fr(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0}function k(e){e.down=!1}function cr(e){var n=c.width/c.height;return n<1&&(e*=n),e}function fr(e){var n=c.width/c.height;return n>1&&(e/=n),e}function J(){var e=lr(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function lr(e,n,i){var t,a,o,u,l,f,T,A;switch(f=i*(1-n),T=i*(1-(l=6*e-(u=Math.floor(6*e)))*n),A=i*(1-(1-l)*n),u%6){case 0:t=i,a=A,o=f;break;case 1:t=T,a=i,o=f;break;case 2:t=f,a=i,o=A;break;case 3:t=f,a=T,o=i;break;case 4:t=A,a=f,o=i;break;case 5:t=i,a=f,o=T}return{r:t,g:a,b:o}}function mr(e){return{r:e.r/255,g:e.g/255,b:e.b/255}}function sr(e,n,i){var t=i-n;return t==0?n:(e-n)%t+n}function C(e){var n=r.drawingBufferWidth/r.drawingBufferHeight;n<1&&(n=1/n);var i=Math.round(e),t=Math.round(e*n);return r.drawingBufferWidth>r.drawingBufferHeight?{width:t,height:i}:{width:i,height:t}}function dr(e,n,i){return{x:n/e.width,y:i/e.height}}function S(e){var n=window.devicePixelRatio||1;return Math.floor(e*n)}function hr(e){if(e.length==0)return 0;for(var n=0,i=0;i<e.length;i++)n=(n<<5)-n+e.charCodeAt(i),n|=0;return n}window.addEventListener("touchend",function(e){for(var n=e.changedTouches,i=function(a){var o=E.find(function(u){return u.id==n[a].identifier});if(o==null)return"continue";k(o)},t=0;t<n.length;t++)i(t)}),window.addEventListener("keydown",function(e){e.code==="KeyP"&&(config.PAUSED=!config.PAUSED),e.key===" "&&K.push(parseInt(20*Math.random())+5)}),document.addEventListener("mousedown",function(e){if(!x||!x.switched){var n=S(e.pageX),i=S(e.pageY),t=E.find(function(a){return a.id==-1});t==null&&(t=new W),oe(t,-1,n,i)}}),document.addEventListener("mousemove",function(e){if(!x||!x.switched){var n=E[0];n.down&&ue(n,S(e.pageX),S(e.pageY))}}),document.addEventListener("mouseup",function(){x&&x.switched||k(E[0])}),document.addEventListener("touchstart",function(e){if(!x||!x.switched){e.preventDefault();for(var n=e.targetTouches;n.length>=E.length;)E.push(new W);for(var i=0;i<n.length;i++){var t=S(n[i].pageX),a=S(n[i].pageY);oe(E[i+1],n[i].identifier,t,a)}}}),document.addEventListener("touchmove",function(e){if(!x||!x.switched){e.preventDefault();for(var n=e.targetTouches,i=0;i<n.length;i++){var t=E[i+1];t.down&&ue(t,S(n[i].pageX),S(n[i].pageY))}}},!1),document.addEventListener("touchend",function(e){if(!x||!x.switched)for(var n=e.changedTouches,i=function(a){var o=E.find(function(u){return u.id==n[a].identifier});if(o==null)return"continue";k(o)},t=0;t<n.length;t++)i(t)});
