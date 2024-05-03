#!/bin/bash

# Function to create the standalone/modular component folder structure
create_component() {
    COMPONENT_NAME=$1
    COMPONENT_PATH=$2
    COMPONENT_STANDALONE=$3

    if [ -z "$COMPONENT_PATH" ]; then
        COMPONENT_PATH="src/app"
    fi

    if [ -z "$COMPONENT_STANDALONE" ]; then
        COMPONENT_STANDALONE="false"
      else
        if [ "$COMPONENT_STANDALONE" == true ]; then
          COMPONENT_STANDALONE="true"
        fi
    fi

    mkdir -p $COMPONENT_PATH/$COMPONENT_NAME
    touch $COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.component.ts
    touch $COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.component.html
    touch $COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.component.scss

    if [ "$COMPONENT_STANDALONE" == true ]; then
       echo "import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nutrition-app-$COMPONENT_NAME',
  standalone: $COMPONENT_STANDALONE,
  templateUrl: './$COMPONENT_NAME.component.html',
  styleUrls: ['./$COMPONENT_NAME.component.scss']
})
export class ${COMPONENT_NAME^}Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}" > $COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.component.ts

  else

    echo "import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nutrition-app-$COMPONENT_NAME',
  templateUrl: './$COMPONENT_NAME.component.html',
  styleUrls: ['./$COMPONENT_NAME.component.scss']
})
export class ${COMPONENT_NAME^}Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}" > $COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.component.ts

    fi

}

createroute() {
  touch $COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.routing.ts

  echo "
  import { Routes } from '@angular/router';

  export const routes: Routes = [];
" > $COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.routing.ts
}

# Check if argument is provided
if [ -z "$1" ]; then
    echo "Please provide a component name."
    exit 1
fi

# Check if argument is provided
if [ -z "$2" ]; then
    echo "Please provide a component path."
    exit 1
fi

# Check if argument is provided
# if [ -z "$3" ]; then
#     $3 = "false"
# fi



if [ "$3" ] && [ "$3" == true ]; then
  # Call the function to create the component
  create_component $1 $2 $3 && createroute
  echo "Standalone Component '$1' created successfully at '$2$1'."
else
  # Call the function to create the component
  create_component $1 $2
  echo "Component $1 created successfully at '$2$1'. Add it to your app module."
fi
