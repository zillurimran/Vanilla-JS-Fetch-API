/**
 * Fetch HTTP Library
 */

class ImranHttp{

    /**get request */ 
       async get(url_link){
            const res = await fetch(url_link);
            const resData = await res.json();
            return resData;
        };

    /**post request */ 
       async post(url_link, payload){
            const res = await fetch(url_link,{
                method: "POST",
                headers:{
                    'Content-type': 'application/JSON',
                },
                body: JSON.stringify(payload)
            })

            const resData = await res.json();
            return resData;
        };
    
    /**put request */
       async put(url_link, payload){
            const res = await fetch(url_link,{
                method: "PUT",
                headers:{
                    'Content-type': 'application/JSON',
                },
                body: JSON.stringify(payload)
            })
            const resData = await res.json();
            return resData;
        };

    /**delete request */
       async delete(url_link){
            const res = await fetch(url_link,{
                method: "DELETE",
                headers:{
                    'Content-type': 'application/JSON',
                },
            })
            const resData = await res.json();
            return resData;
        };
}