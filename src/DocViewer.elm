module DocViewer where

import Graphics.Element (..)
import ColorScheme as C
import Json.Decode as Json
import Signal ((<~))

import Window

import Component.ModuleDocs as Docs
import Component.Documentation as D

port documentationRaw : String

dummyDocs : D.Documentation
dummyDocs =
  D.Documentation "" "Loading documentation..." [] [] []

documentation = 
    case Json.decodeString D.documentation documentationRaw of
      Ok docs -> docs
      Err msg -> { dummyDocs | 
                   comment <- "There was an error loading these docs! They may be corrupted." 
                 }

main = view documentation

view : D.Documentation -> Element
view docs =
  color C.background <|
     Docs.view 980 docs
