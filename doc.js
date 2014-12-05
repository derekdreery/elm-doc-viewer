var doc = 
{
  "name": "List",
  "comment": "A library for manipulating lists of values. Every value in a\nlist must have the same type.\n\n# Basics\n@docs isEmpty, length, reverse, member\n\n# Sub-lists\n@docs head, tail, filter, take, drop\n\n# Putting Lists Together\n@docs repeat, (::), append, concat, intersperse\n\n# Taking Lists Apart\n@docs partition, unzip\n\n# Mapping\n@docs map, map2, map3, map4, map5\n\nIf you can think of a legitimate use of `mapN` where `N` is 6 or more, please\nlet us know on [the list](https://groups.google.com/forum/#!forum/elm-discuss).\nThe current sentiment is that it is already quite error prone once you get to\n4 and possibly should be approached another way.\n\n# Special Maps\n@docs filterMap, concatMap, indexedMap\n\n# Folding\n@docs foldr, foldl\n\n# Special Folds\n@docs sum, product, maximum, minimum, all, any, foldr1, foldl1, scanl, scanl1\n\n# Sorting\n@docs sort, sortBy, sortWith",
  "aliases": [],
  "types": [],
  "values": [
    {
      "name": "::",
      "comment": "Add an element to the front of a list. Pronounced *cons*.\n\n    1 :: [2,3] == [1,2,3]\n    1 :: [] == [1]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "var",
          "name": "a"
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      },
      "associativity": "right",
      "precedence": 5
    },
    {
      "name": "all",
      "comment": "Determine if all elements satisfy the predicate.\n\n    all isEven [2,4] == True\n    all isEven [2,3] == False\n    all isEven [] == True",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "type",
            "name": "Bool"
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "type",
            "name": "Bool"
          }
        }
      }
    },
    {
      "name": "any",
      "comment": "Determine if any elements satisfy the predicate.\n\n    any isEven [2,3] == True\n    any isEven [1,3] == False\n    any isEven [] == False",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "type",
            "name": "Bool"
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "type",
            "name": "Bool"
          }
        }
      }
    },
    {
      "name": "append",
      "comment": "Put two lists together.\n\n    append [1,1,2] [3,5,8] == [1,1,2,3,5,8]\n    append ['a','b'] ['c'] == ['a','b','c']",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "concat",
      "comment": "Concatenate a bunch of lists into a single list:\n\n    concat [[1,2],[3],[4,5]] == [1,2,3,4,5]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "a"
                }
              ]
            }
          ]
        },
        "out": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        }
      }
    },
    {
      "name": "concatMap",
      "comment": "Map a given function onto a list and flatten the resulting lists.\n\n    concatMap f xs == concat (map f xs)",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "b"
              }
            ]
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "b"
              }
            ]
          }
        }
      }
    },
    {
      "name": "drop",
      "comment": "Drop the first *n* members of a list.\n\n    drop 2 [1,2,3,4] == [3,4]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "type",
          "name": "Int"
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "filter",
      "comment": "Keep only elements that satisfy the predicate.\n\n    filter isEven [1..6] == [2,4,6]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "type",
            "name": "Bool"
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "filterMap",
      "comment": "Apply a function that may succeed to all values in the list, but only keep\nthe successes.\n\n    String.toInt : String -\u003e Maybe Int\n\n    filterMap String.toInt [\"3\", \"4.0\", \"5\", \"hats\"] == [3,5]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "Maybe"
            },
            "args": [
              {
                "tag": "var",
                "name": "b"
              }
            ]
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "b"
              }
            ]
          }
        }
      }
    },
    {
      "name": "foldl",
      "comment": "Reduce a list from the left.\n\n    foldl (::) [] [1,2,3] == [3,2,1]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "b"
            },
            "out": {
              "tag": "var",
              "name": "b"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "b"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "a"
                }
              ]
            },
            "out": {
              "tag": "var",
              "name": "b"
            }
          }
        }
      }
    },
    {
      "name": "foldl1",
      "comment": "Reduce a list from the left without a base case. List must be non-empty.",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "a"
            },
            "out": {
              "tag": "var",
              "name": "a"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "var",
            "name": "a"
          }
        }
      }
    },
    {
      "name": "foldr",
      "comment": "Reduce a list from the right.\n\n    foldr (+) 0 [1,2,3] == 6",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "b"
            },
            "out": {
              "tag": "var",
              "name": "b"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "b"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "a"
                }
              ]
            },
            "out": {
              "tag": "var",
              "name": "b"
            }
          }
        }
      }
    },
    {
      "name": "foldr1",
      "comment": "Reduce a list from the right without a base case. List must be non-empty.",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "a"
            },
            "out": {
              "tag": "var",
              "name": "a"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "var",
            "name": "a"
          }
        }
      }
    },
    {
      "name": "head",
      "comment": "Extract the first element of a list. List must be non-empty.\n\n    head [1,2,3] == 1",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        },
        "out": {
          "tag": "var",
          "name": "a"
        }
      }
    },
    {
      "name": "indexedMap",
      "comment": "Same as `map` but the function is also applied to the index of each\nelement (starting at zero).\n\n    indexedMap (,) [\"Tom\",\"Sue\",\"Bob\"] == [ (0,\"Tom\"), (1,\"Sue\"), (2,\"Bob\") ]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "type",
            "name": "Int"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "a"
            },
            "out": {
              "tag": "var",
              "name": "b"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "b"
              }
            ]
          }
        }
      }
    },
    {
      "name": "intersperse",
      "comment": "Places the given value between all members of the given list.\n\n    intersperse \"on\" [\"turtles\",\"turtles\",\"turtles\"] == [\"turtles\",\"on\",\"turtles\",\"on\",\"turtles\"]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "var",
          "name": "a"
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "isEmpty",
      "comment": "Determine if a list is empty.\n\n    isEmpty [] == True",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        },
        "out": {
          "tag": "type",
          "name": "Bool"
        }
      }
    },
    {
      "name": "length",
      "comment": "Determine the length of a list.\n\n    length [1,2,3] == 3",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        },
        "out": {
          "tag": "type",
          "name": "Int"
        }
      }
    },
    {
      "name": "map",
      "comment": "Apply a function to every element of a list.\n\n    map sqrt [1,4,9] == [1,2,3]\n\n    map not [True,False,True] == [False,True,False]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "var",
            "name": "b"
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "b"
              }
            ]
          }
        }
      }
    },
    {
      "name": "map2",
      "comment": "Combine two lists, combining them with the given function.\nIf one list is longer, the extra elements are dropped.\n\n    map2 (+) [1,2,3] [1,2,3,4] == [2,4,6]\n\n    map2 (,) [1,2,3] ['a','b'] == [ (1,'a'), (2,'b') ]\n\n    pairs : List a -\u003e List b -\u003e [(a,b)]\n    pairs lefts rights =\n        map2 (,) lefts rights",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "b"
            },
            "out": {
              "tag": "var",
              "name": "result"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            },
            "out": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "result"
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "map3",
      "comment": "",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "b"
            },
            "out": {
              "tag": "lambda",
              "in": {
                "tag": "var",
                "name": "c"
              },
              "out": {
                "tag": "var",
                "name": "result"
              }
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            },
            "out": {
              "tag": "lambda",
              "in": {
                "tag": "app",
                "func": {
                  "tag": "type",
                  "name": "List"
                },
                "args": [
                  {
                    "tag": "var",
                    "name": "c"
                  }
                ]
              },
              "out": {
                "tag": "app",
                "func": {
                  "tag": "type",
                  "name": "List"
                },
                "args": [
                  {
                    "tag": "var",
                    "name": "result"
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "name": "map4",
      "comment": "",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "b"
            },
            "out": {
              "tag": "lambda",
              "in": {
                "tag": "var",
                "name": "c"
              },
              "out": {
                "tag": "lambda",
                "in": {
                  "tag": "var",
                  "name": "d"
                },
                "out": {
                  "tag": "var",
                  "name": "result"
                }
              }
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            },
            "out": {
              "tag": "lambda",
              "in": {
                "tag": "app",
                "func": {
                  "tag": "type",
                  "name": "List"
                },
                "args": [
                  {
                    "tag": "var",
                    "name": "c"
                  }
                ]
              },
              "out": {
                "tag": "lambda",
                "in": {
                  "tag": "app",
                  "func": {
                    "tag": "type",
                    "name": "List"
                  },
                  "args": [
                    {
                      "tag": "var",
                      "name": "d"
                    }
                  ]
                },
                "out": {
                  "tag": "app",
                  "func": {
                    "tag": "type",
                    "name": "List"
                  },
                  "args": [
                    {
                      "tag": "var",
                      "name": "result"
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    {
      "name": "map5",
      "comment": "",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "b"
            },
            "out": {
              "tag": "lambda",
              "in": {
                "tag": "var",
                "name": "c"
              },
              "out": {
                "tag": "lambda",
                "in": {
                  "tag": "var",
                  "name": "d"
                },
                "out": {
                  "tag": "lambda",
                  "in": {
                    "tag": "var",
                    "name": "e"
                  },
                  "out": {
                    "tag": "var",
                    "name": "result"
                  }
                }
              }
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            },
            "out": {
              "tag": "lambda",
              "in": {
                "tag": "app",
                "func": {
                  "tag": "type",
                  "name": "List"
                },
                "args": [
                  {
                    "tag": "var",
                    "name": "c"
                  }
                ]
              },
              "out": {
                "tag": "lambda",
                "in": {
                  "tag": "app",
                  "func": {
                    "tag": "type",
                    "name": "List"
                  },
                  "args": [
                    {
                      "tag": "var",
                      "name": "d"
                    }
                  ]
                },
                "out": {
                  "tag": "lambda",
                  "in": {
                    "tag": "app",
                    "func": {
                      "tag": "type",
                      "name": "List"
                    },
                    "args": [
                      {
                        "tag": "var",
                        "name": "e"
                      }
                    ]
                  },
                  "out": {
                    "tag": "app",
                    "func": {
                      "tag": "type",
                      "name": "List"
                    },
                    "args": [
                      {
                        "tag": "var",
                        "name": "result"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      "name": "maximum",
      "comment": "Find the maximum element in a non-empty list.\n\n    maximum [1,4,2] == 4",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "comparable"
            }
          ]
        },
        "out": {
          "tag": "var",
          "name": "comparable"
        }
      }
    },
    {
      "name": "maybeCons",
      "comment": "",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "Maybe"
            },
            "args": [
              {
                "tag": "var",
                "name": "b"
              }
            ]
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            },
            "out": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "member",
      "comment": "",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "var",
          "name": "a"
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "type",
            "name": "Bool"
          }
        }
      }
    },
    {
      "name": "minimum",
      "comment": "Find the minimum element in a non-empty list.\n\n    minimum [3,2,1] == 1",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "comparable"
            }
          ]
        },
        "out": {
          "tag": "var",
          "name": "comparable"
        }
      }
    },
    {
      "name": "partition",
      "comment": "Partition a list based on a predicate. The first list contains all values\nthat satisfy the predicate, and the second list contains all the value that do\nnot.\n\n    partition (\\x -\u003e x \u003c 3) [0..5] == ([0,1,2], [3,4,5])\n    partition isEven        [0..5] == ([0,2,4], [1,3,5])",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "type",
            "name": "Bool"
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "_Tuple2"
            },
            "args": [
              {
                "tag": "app",
                "func": {
                  "tag": "type",
                  "name": "List"
                },
                "args": [
                  {
                    "tag": "var",
                    "name": "a"
                  }
                ]
              },
              {
                "tag": "app",
                "func": {
                  "tag": "type",
                  "name": "List"
                },
                "args": [
                  {
                    "tag": "var",
                    "name": "a"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "name": "product",
      "comment": "Get the product of the list elements.\n\n    product [1..4] == 24",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "number"
            }
          ]
        },
        "out": {
          "tag": "var",
          "name": "number"
        }
      }
    },
    {
      "name": "repeat",
      "comment": "Create a list with *n* copies of a value:\n\n    repeat 3 (0,0) == [(0,0),(0,0),(0,0)]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "type",
          "name": "Int"
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "reverse",
      "comment": "Reverse a list.\n\n    reverse [1..4] == [4,3,2,1]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        },
        "out": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        }
      }
    },
    {
      "name": "scanl",
      "comment": "Reduce a list from the left, building up all of the intermediate results into a list.\n\n    scanl (+) 0 [1,2,3,4] == [0,1,3,6,10]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "b"
            },
            "out": {
              "tag": "var",
              "name": "b"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "b"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "a"
                }
              ]
            },
            "out": {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            }
          }
        }
      }
    },
    {
      "name": "scanl1",
      "comment": "Same as scanl but it doesn't require a base case. List must be non-empty.\n\n    scanl1 (+) [1,2,3,4] == [1,3,6,10]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "a"
            },
            "out": {
              "tag": "var",
              "name": "a"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "sort",
      "comment": "Sort values from lowest to highest\n\n    sort [3,1,5] == [1,3,5]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "comparable"
            }
          ]
        },
        "out": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "comparable"
            }
          ]
        }
      }
    },
    {
      "name": "sortBy",
      "comment": "Sort values by a derived property.\n\n    alice = { name=\"Alice\", height=1.62 }\n    bob   = { name=\"Bob\"  , height=1.85 }\n    chuck = { name=\"Chuck\", height=1.76 }\n\n    sortBy .name   [chuck,alice,bob] == [alice,bob,chuck]\n    sortBy .height [chuck,alice,bob] == [alice,chuck,bob]\n\n    sortBy String.length [\"mouse\",\"cat\"] == [\"cat\",\"mouse\"]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "var",
            "name": "comparable"
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "sortWith",
      "comment": "Sort values with a custom comparison function.\n\n    sortWith flippedComparison [1..5] == [5,4,3,2,1]\n\n    flippedComparison a b =\n        case compare a b of\n          LT -\u003e GT\n          EQ -\u003e EQ\n          GT -\u003e LT\n\nThis is also the most general sort function, allowing you\nto define any other: `sort == sortWith compare`",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "lambda",
          "in": {
            "tag": "var",
            "name": "a"
          },
          "out": {
            "tag": "lambda",
            "in": {
              "tag": "var",
              "name": "a"
            },
            "out": {
              "tag": "type",
              "name": "Order"
            }
          }
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "sum",
      "comment": "Get the sum of the list elements.\n\n    sum [1..4] == 10",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "number"
            }
          ]
        },
        "out": {
          "tag": "var",
          "name": "number"
        }
      }
    },
    {
      "name": "tail",
      "comment": "Extract the elements after the head of the list. List must be non-empty.\n\n    tail [1,2,3] == [2,3]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        },
        "out": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "var",
              "name": "a"
            }
          ]
        }
      }
    },
    {
      "name": "take",
      "comment": "Take the first *n* members of a list.\n\n    take 2 [1,2,3,4] == [1,2]",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "type",
          "name": "Int"
        },
        "out": {
          "tag": "lambda",
          "in": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          },
          "out": {
            "tag": "app",
            "func": {
              "tag": "type",
              "name": "List"
            },
            "args": [
              {
                "tag": "var",
                "name": "a"
              }
            ]
          }
        }
      }
    },
    {
      "name": "unzip",
      "comment": "Decompose a list of tuples into a tuple of lists.\n\n    unzip [(0, True), (17, False), (1337, True)] == ([0,17,1337], [True,False,True])",
      "type": {
        "tag": "lambda",
        "in": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "List"
          },
          "args": [
            {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "_Tuple2"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "a"
                },
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            }
          ]
        },
        "out": {
          "tag": "app",
          "func": {
            "tag": "type",
            "name": "_Tuple2"
          },
          "args": [
            {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "a"
                }
              ]
            },
            {
              "tag": "app",
              "func": {
                "tag": "type",
                "name": "List"
              },
              "args": [
                {
                  "tag": "var",
                  "name": "b"
                }
              ]
            }
          ]
        }
      }
    }
  ]
}