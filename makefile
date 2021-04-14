target=null
disa=./dist/

$(target) : $(obj)
	npx pug parcel/index.pug -o dist/ 
	npx sass ./parcel/fonts.sass ./dist/fonts.css 
	npx sass ./parcel/ft.sass ./dist/ft.css 
	npx sass ./parcel/screen2small.sass ./dist/screen2small.css 
	npx sass ./parcel/Old_Friend.sass ./dist/Old_Friend.css 
	npx sass ./parcel/loading.sass ./dist/loading.css 
	
	