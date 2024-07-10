
import Card from '../componenti_main/Card';
import '../../Style/stile_componenti_elementare/Main_elementare.css';

function Main_elementare() {

  // creo un array di oggetti cosi da far renderizzare dati differenti dal componente card
  const datiScuolaElementare = [
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABblBMVEX//////v8wSpf///0AneD+3AD8//+Xvg3iAXv///wtSJaTvAAvSpbiAHknRJSRugAAmd8gQJP+2QDiAHUXOpAAmt4ZOZL93QAAnt/gAG+9v9jw8fb4+PsAMo8ALowkQpNebKri4+1lc67z9ufT4aejwzK85/Pe6L7w9eHU7fb2z+DBxNmxt9I8UZtwfbKorcvo6PHV1uSVncWHkL1OYKN9hraRmMEAIYikqc7xu9L45+786X79+Nn89sz86oj88rn87qB0xueH0e3o9vmf2e6/1HOOxpzt9Niuy1XC14rT4qLr8djc57i20WeixUB+xO1GtOfB1oEKqODwhrDzsM7cuautuUzGg27GwYDy5+Ox4fIwt+foPo9ewefsc6n22+jwosLmVZXqYp7jTZbvlb5xkL5HbK8AcsBRWJ4QfsCbtNNqwOwAGocXY7BJd7LeAGG91KEAn8mKzNr+42j68az840n86X/93jbqTWf0woycQUBEAAAS30lEQVR4nO1ci1/a2JdPcm00ESKRmCokJIBvCBBeAgqo2J/Ptr5+u/tzLFrr7jjT2d9j1br73++5NwEREOnYjnQ+9zudouFyc8/re865uZRhKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKL4dEMO+9BK+M7QaeuklfF+wtTWB4V96Fd8TwuwH9Gd1U5ZhwT/ZhfUasyH8GYWMRuH/N3Nzf1mr8Rs14aWX8w2ACG2yDGJZYXN6em56c2t7bnNnTqh9rq2t/8Bsg5pr343OT89Fp/eic2NjYzNv342Oje3gATXf+9n9H5pr2M3Nneje9PT2m+3tg4OZN1ujw8PDo6OjM3PC5twcz5z4DmuTtZde5VcBKIRxLTe/ubM5vb0XBdlAMhfDGKPDb2dmDqICYmb3fWu+2R+OUKPzc7vTO7sQbWNje9NvDoYbkoFoo2Ojo2MzW292o6AIhNbXh4b2ffwPEYmuHean9/bevt3c2tka295yPLIp3ujo1vD2/O4MMIxA2IcVZtd9Q771H0NCMN3e9tbM1p4wvbMD4Qb/uZKNbY2NYTG3383hLPEgNyxs+CaHfBsDLyGLNje3D4BQohB0w2NNqxHLzWwebO/MbE83R6N7imUWJoeGBl5CFEXz0R1gxoPt6QPHK8eGDw7eYCOCsG+2d/eiZFy3D9d8WMLDP3bFfaPk5DG0KwjRXTDb2Cj2RhBuZ29vF0FO39ve3Y32ngMdgoSTtQHNiEcl8hKdewPGGpsZnXl3MLOzDbH2dhcIZxrN4Yh7wv/QPrbhoJZtx0VB2Hn3Dkw3+m5mbnceX4MEP7c1vLm9vT3X3yQLk8A0C99zmb8f7F//bQantq09YiwW0sXOtLA3szW857zfD30IAqSLiUGNw39/e/Aff3tw5c3eziaWq39qFBZOIA5/Gsy6Tfjb4nHplEft4qCOK70m+QBFjW8ffYVS/kjUp7TTs+dNgWofJnBCHEiuQfzp1Fn9/HlEL9Q2fEOTvp++xu5/HErnUx/rF8+bA82eTAxNTmwIAynh4uKI/6P//FlzoJMN8NKhASXTUnFkxA+B2Nbcoa+hGlQjEk6evKgNUXf6R9rihResyD6nfWWZNVKZnjxjjucBixaMxWNd6Jxl6qcjI96RxkgyNBwLxOPxQCBmh4Na76mDLHwE1d6vQf80tP+oDYPx75xJBDavhvSQ0Xkfnq/7R0ZGphZdNmXjEUtVFBmgEMhc1kzk03m727woEcqSKTdwZTqx8dj9bUUvfCtZugNlFSUdDChqvF1CljkGCf3nbosRMxSJ83D4j+jhPKIocqIoyboa7zYrY8qcbuPSbhYH4uFC19hFTEqWROv72tCU5STcwRK5zvfOpkDCY+dnOyRJRsN8IifhF1WxEoHuUZqTPZxBZD/5cOibnNxf6CqGcCV7RCX4jWTpiqQimthcpqiEO94s1YFp6s6jlYScTWQKEH+2HU5ZUi6YSqWcSOxcusAEFA7sSySsre9DYXoy2+XmiMkYHslSO+/87RBUOJWEESepXcLp7HTE6yd1Gwq21DYxFQYj5vGkAdNK2Ywewz8vbOCqZqGrDWOKqMYS6vexYYooLmNIEWyEoMrJqY4x7NmF1//pqK1uQ0xWtHpPnjA4WUuEyIwnJ7O4f+q2tY8sUc4z2Scm6/gUEw4EnjZ7+jdsspTqUYii4zIndQZU6Qhs6D1rr0zDqtyb/mzwjACvZImRax8WJqEyfd8hIWLSCqgqqGaeXO0DBM1sPmNFnshVsRCHTZcxOEeBWVHKdY5Ci5AtvKftl3OG2mnv1o9ZohFh4pAFsNJq6yf7wKaTnStK6R7w9nioa7Z5dHJNCdjxAJO0ercECSkLf2uGiK2BILC4bmHInH30QkJ80EAhCDLJ7Pl4Pq6ISorJumoQTnBRMzTU2QQnJCOBldsI6P5qp1yByeYTEfzaC1kJ2w58kzC1ZolE4g4cg4Te0wfKQkxSlrulwCZYEUdXTE+4v9dwYTp02KFyW8WKsENYx3wyyxX6S4uKxmTtoMKEe4dvRMKigW9GCGfLHkKO7eAv69iGxVbtIkidvRNYUuYMWIXuOgXa+OzsCrePMyUjD4ZUg4hhTdUjqk9EloOgDJ80s2lGU3uOC6hyEhiDUwKw+qTqUbubfBF7qf8hmdoqVsvj0CROSbaYEC3MvgcrTrTvt8VUrKmwjnkmpnNcdy/qAJGwoCIU7C0hk1BkuyCLssagAtwq333U4ieovEdOHzxYSRiglh6AKBRZ1moWEGhhfxYzzYe2QAQTpmE2PYXpP2QoXH95H8lB8NJEkrHNJwZmQlBXSQktkFVlI/BICFxChwhuWmoxYlB5wp04DtgrrTd1xqMFaKAm9jce5nyIQsj04ZCTKuxkXOuzOs1nGNNOWUw29tTIcEKCxYRC+lXyMd7lz47Ahl5vqeVaUhZ7OmlA8chsWLdan87gnZqhn/gHu1ERyQDhzK+uZ5BwlddwUuyS3dpGMklDNOIBO/XweRhqeWW18yM/dBcaf/8ulCEPmBRL0lq+maKUZ6701tyzsTYxdHgyu97aBQMHQDkaACLFjxn73jQgzXpeyVpSTzonYIFJu1sjHE8XUo7U2gVuET+17LdBudKTSfHKg7lQsnVVJ2v7vg+fhfX1losZWUowrMWxzrqfllCLFdIxdxyfCvaTO1OESTtgZ1VVl10blIqX/pGP9eP7t3MG7kWaixcYPpCLRPJhx+iQeCQxUgglWo96AdX4JiEMT9Za1mvg/JQPObEUSD+VKLS8rOqq6vIz6m+DGQLK6JhYyCmyWIhlZTIXyxePofY+XmxZmdhak2JXB32oqupylQB5zVIjD+8/O7vu873fQGtNZ0QBFSpSeylHOpSI2rvNR8gWZSUSKMj6V/VZkO4T7dfYLMyk4f6VJCcWfWJOvdBeNDURACZt3gUKuKyqJMKsljH0lLNyheMUPO29F6Hwf+5v+CYOa3zzcT6CaJULgmiReaHeUJph63xOs2Op5hSIiauSCu6WUuQn+bMFKQiojvFZCRsP2iPDjdCj0gXeq2kOiEitjVPYkJw9jKDqOjzwswxZDpwg21h0UJbV1MTQZO1wtqmbFFSuwYRTcts6B3UuFg6FCzGsA3BJRb1PN9jgsg1vBOSuxXN3sLi2atu3QEzEEIntbMVxRZY/LxancN3GOwrFne19r2ODQR3BWN35ISgTJw7o4OsOIbFgIvG/PkC6ONn/OWS5MkKEJJJLzuZXVvS4bhEPyaEwpH+PInIeTo25FreBvIgtTFyg9A8Ynm67lFZEtxCXGnx59nGK1G1MY2XcvUOlZFF1OBOFl65IRgEnhY5CU+R0QZbJe0jDbUttH2w4azWp7UoUzZBze2hrjJxDHNDLQSVkq4rMyZyn4UaaIcnEnklFfqT06oog6XBaALqDSwEI6+CVpDbZ/hI7qf/YtWFWaqgRsdAFNgIZZcjKWSZBepSYCn9Zcs5VisdcX1gb8s3+KotOl42g8eYafS/krIY6TTw7CJjmmZjiETlHbnAsi3Caalj9700jBmpSs+1i1vDgHU5blPSmdbWLUy9ugp3nvZDspEjjBFdG5nBbgJFXyZYMQjKu2MAX0jitODa4EpXYwvrC0OThFdeg4Thwi3sLmLLhS6wEloXm08brkziRI9Qbc3aS2JwieVKPbc93QgDVKbGHY50uWMuossMeGtYsOi/hPdO6w4JpgwPfIz8iiA7FtbStuwSLr8Fq8koBK4AYOKxwBlubXPcN/SJ5VLe/SEjNHYW84ZFdPcGnjbRJxEBIwvSDr195MDfYlqyYZEGpPp9E2qrHelBsAc2IMFVSUlQzDL/xTMHE1z+e4Z39+iLJ55Z4v+cIwz0utXONLRA3xcZVsEoG9yvYV3CUHdY+T3hEj7lBbqlJ95UfFIEZ1yx5gxOzoCqcz/HOWIEoUhHlWDihK646taU+6TRnKG2FXVCG+SVdjbgzBMlU6OzskxfikLSIoORGrkBgN9k1YcLg3Po5IREuDuugnAhhV80isb1/Mvsz5JFf1wU8T1Jp8hW2uqsz4GmO0wNOEIBvOtfBbTzZkO6BqsdhI7OnXI2Ei4DVxbajFLbiMcxMgHgCTrZZEka8AFTjxf0TLC0tN3IFIryXIlEB6yUcxyKgB8eYV2oKKTp2vpyMC2xm/fOC6vFIh5/xu4RnnAIBU5flzpiTOA9mJ+RYAOsKrAmsayUKtlvhM7EnTKgF8vl03NaYtKq0P6aIk3a4GceZkBMdpfrpiPdT6fwceh9LvC8SwGFN1wqiU4ujoCRxeF+CRXbIjCtYQwXdI0LHypy8h1JAivA1rNasITaq9yRQl8vHMd3DiWKjSbSIh2ACJVM2kNJ75gvEXoUUXL+qUJmY7aSEd6U0t2qC8PnNFUU7Ovf7L0ulCw0B7TXcEe8g4w4dP1kRObKrgbSsZImGw5YBVZbjqZgZihNh0MIvhuVx30soBdf+4M5XHO4S4a54HpzYnUWFXScN6yK5jytAUDR7M6kdSmpBOy8ZQMVWus3csdYEmf/NjVKWxwnx/GyxruF03yzZoImScZylZNN0eEbLhmKQpslyeCZuqKGlUC7FyGSptv73//Y47JJYirmUC7k8n5ecTZ+UCAIazToZRmCHChoJs2UjN2xYT2wEhJccLeYlURINhUtDieSeIEBIg96csBfYxVxqtFW8Vlz0e08v+eIZrjkbd8O5Ai/YlkUWl6oaExMhJVrucpBm6bYWxD0OtPI5FkoA/u/EvmELGiaoNnA8hyEfxEFTMSFYCJkRkWukDaezs0HpV8DFHtFNwMmQ+UTRBrcjqosZciSiwnINxcoFUvjzWjzMxIEd4xqU9ZmQp6XUr5+RmmaxCEHvadAnFGbAvIGcLgbxPpnIWUu45CR1OaxSM6FmQAgfCYe6WpZ1K8j8YohiwgyJeOqc4lFMcwlMxlqQ/BV9Kc8kdHePnCCjS4q8lAMClSQjEsZPiq+W8k+ne80K5dIRHW/g2QkFAl6UZMWwspaCK6S0LiuKpC7JD7Zmj44vvf7z4iWOfk+jtodA1SVJ0bNB0iLK8hUmLmgCcNTwAVG/78sCqqLCSpn9n0VFFdMa2fTIwUWykyQEE5JxhRtoxm5JX4gJ5BJpki5SliKrkhxaMvtJhIgtXElWxklAqQw0ABx+mmuIsHJguXA6YkbyMfbBmbzg0Sev/2PxH34tYjSaAOzKAdMyiS/zDJvSyDk+/OBXlCXoiTMtytbsIP4Af+j7FfuL8ycYDjoHwZFzfpw07S095f0LFtY0c8meT0oeQzAJDSwUg5KefHwQf1ac8h7x596iHZKfepaJMoqqKJFu2kb7vm4PSb85WHS/r4VfU3FQUKa5eQuqbnf10nlpylvn68dFJpzJtkjIdn1CqqVS3ekA7U+s/76vW6KeD2P7RI878xelC6+/eHl0/MwDbh98hy9yfI8op6dq68der79eKhaf96UJVDucHNCv6R0fFaf852el86/ZQeiC2qFvYSDPYDJnp8ypf6RUOn7mSVNm/QWPfvUCz06xdWiBjz8+V8IN38se33scI6W6/5RBi8/00oGVkGUuFj/5T38/kbKNo+813+fBjENG4/3+kd/PgjwjzENrX6lW/vmvwTyyD2sseqeKfY8WoOTmWYhfRhD4aHR1tXpTXl5eXalW/2dQv1kCCcN/Wur7ECiMWylHK9VyuTK/8nr81evru/Hx8dsojzYGV8Li1NQi/5SfYruVy8vVcuWmUrmuLF/f3d6+fkXwuiKUq1VUm9wQBvMrXtDoTz1JNdHVm8rNl6pQXr7+cvdq/FULxm/v7q7LUZhnYWC/TLo4ddp1bfgb+NFypVyprJar4JK31bvbh9LBb+PLd+XoYNZr91icGmk7GEUQrVaAIpdXvtxWwE6uS46TV/zX7d31inBduREEtu8ofikseqcWW35leYRWKrevb69X5qu3ldcPjIaDD/jly/Uqmm/7UvAAQztvpAuEN6+qldXblXJZEG5vHZPd3jlWA1RvrsvXlSoey7Poib5lgHDpv3R+QCvzwny0fFO+u12+dQPtrrK8ip10/PX49Wp5JYp+xH+SpjR16uyrsEK0Wr4hlhsHiV6tlm9WylVeuL35AkaN4rEs8wNKyPPeT/hFiK4sL0P+fnX9+rqyurpaLlfLt8u8sHyzEh3QVNcvNOgu5svXWLjxu0qlzEdBan6+elOtjM9/ubkp8/2faxpIIL7+j9cg3ZfV1ZUodkK8BXhzHa3eLl/fYFl/uH/aoxNn//t/5fJDPyyXV6MvtJrvgRK0+Q+ZH7HP+lLb4GHk4sdmkifB1z/+ySVEmvbcnajBx5/chhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAOF/wdtP1G1xgGpZgAAAABJRU5ErkJggg==",
      alt:"logo tabelline",
      titolo: "Tabelline",
      descrizione:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      collegamento: "",
      className: "scrollbar"
    },

    {
      img: "data:image/jpeg;base64,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",
      alt:"logo operazioni",
      titolo: "Operazioni",
      descrizione:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      collegamento: "",
      className: "scrollbar"
      
    },

    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAe1BMVEXy8PH6+Pn39faWlZZ6eHmnpqbAvr/18/TT0dJeXV7m5OXZ19g5OTnp6Ok3NjZUVFQAAACura3//v+BgIBlZWXf3d5HR0efnp+MjIxfX18tLi1zcnMLDQy4t7dMTEyGhYbNy8wpKioTFRQbGxubmptAQEAqKiqsq6siIyLfsRyAAAAD2ElEQVR4nO3aYXOiOhQG4OQIHMHSBARFkWpX7e7//4ULXffO3VVCYEjXzLzPh06nwhHeJgHlCAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwxLj7kZq2SPm2lU0tNpZ6UPy/Y3hekRAUN7nsle5LpigZrsRJRFx+pP2l7uVNTCKNnjkjqnSdF/t10G+t3tNMv8nhWhvdpB/KVOtB9X37/vpCX3CuE1Fz2MrwRxMZqIJP39bDJ0Hr85ILZSp1rzmH+eIQPXFEgoiEvDSSeiU1f25lU6vdsk76S92TzVZaVv9nuGpXYzKuBe0Uo0VpMYrKhfzceow2HU6qZ16LxO58TYYPsD7vV0Nb8Wr/rZ5wBFy+nIsJ+30RPm3fwmxogPBqsQu3Q1vRNiyqwSAf7Jdlm+1p0jiikUN2Es5f0uEpxLmymGiyjPMpZ0rp66T9BK/jKbuNJV8s7niEVBbDg1dq2n81fZ20H6cHPW30jeNvRKmgKJTmDwazmDWi+OsionB/CKU86X3g+o7B21Ekg5ct8elVOf+E52tEVBybLqJj85o6zsjTiKhYS+6+WGCZuc7Iz4i6hH7/7jwjLyP6f0LuM/Lxiib/SMh5Rh6OIvorIdcZ+RfRfUKOM/Iuor9n2e2vDjPyLaJHY6jjMCPPIupLyGVGfl3RHs+y22uuMvJqFPWPoY6rjHyKyJyQs4w8isg0y25bOMnIn7VoaAx1nGTkzSiySchNRr5EZJeQk4y8iIgt1qHfPjPiOVPyIaJ0aZ/Qr4zKcsaMPIiIT0VwHPMpLttU4Yzf+XtwReOlVqNGRbrW3581IkcTLQnqasQpU1YHMz6CnPOBNU19YC2MD6zbl6Qkc/PKn/VISp7t0RFH9dt6sKGhnUHx8TjY9lAdd/FyQtvD5bipDf/1ZffGsiqJ7YjPbjFazvWYlipt0bhCW60siik9mPZDO90/j+SuW1eo2ixtrXZdz1ik3+ZajmQjBjtW29uSyGLgsojk+PHdPQxr+tciGeiIRPq+KWJLO3UomU+HYq6IaNUeRm1o5JPptb0VW1oVWxGn18TQFHhfPavlbS714M+e5vI9sW3Cpf2Juo6cmQLqplCQB/vLot8lvopQFxafEXa6EdfYVOtB9Y91rvRgFxjZXHdvLK4sY1Cmj3n1Hhp8V0o0h8HVuq1V60golZmK3fuxyIPDczdeJ+1KczR2zCrBZNEP2UraS7Ma2THb3jezxX3Hv2a+6Rh3/CPPlp8/HQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgF9+ArhaPGonR4HDAAAAAElFTkSuQmCC",
      alt:"logo figure geometriche",
      titolo: "Figure Geometriche",
      descrizione:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      collegamento: "",
      className: "scrollbar altezza",

    },
    {
      img: "data:image/png;base64,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",
      alt:"logo ",
      titolo: "Problemi base",
      descrizione:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      collegamento: "",
      className: "scrollbar"
    },
  
  ];

  return (
    <div className="main_elementare">
      {/* uso il metodo map per renderizzare le card  */}
      {datiScuolaElementare.map((datiElementari, index) => (
        <Card
          key={index} 
          img={datiElementari.img}
          alt={datiElementari.alt}
          titolo={datiElementari.titolo}
          descrizione={datiElementari.descrizione}
          collegamento={datiElementari.collegamento}
          className={datiElementari.className}
        />
      ))}
    </div>
  );
}

export default Main_elementare;

