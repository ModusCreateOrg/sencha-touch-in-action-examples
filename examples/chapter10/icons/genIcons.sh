#!/bin/sh

#Written by: Jay Garcia

#Purpose: Generate an icon.css file to be consumed by the Sencha Touch in Action
#         chapter 10 Plugin & extension classes.
#Warranty: None
#License: Free

icons=`cd glyphicons/ && ls`;

for i in `echo $icons`
do
	newFn=`echo $i |sed -e "s/glyphicons_[0-9]*_//g"`
	fn=`echo $newFn | awk -F\. '{print $1}'`

	echo ".$fn { background-image: url('glyphicons/$i'); }"
done  | sort > icons.css
