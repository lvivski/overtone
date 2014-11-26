JS_COMPILER ?= ./node_modules/uglify-js/bin/uglifyjs
FILES = \
	src/overtone.js \
	src/audio.js \
	src/util.js \

all: \
	overtone.js \
	overtone.min.js

overtone.js: ${FILES}
	@rm -f $@
	@echo "(function(global){" > $@.tmp
	@echo "'use strict'" >> $@.tmp
	@cat $(filter %.js,$^) >> $@.tmp
	@echo "}(this))" >> $@.tmp
	@$(JS_COMPILER) $@.tmp -b indent-level=2 -o $@
	@rm $@.tmp
	@chmod a-w $@

overtone.min.js: overtone.js
	@rm -f $@
	@$(JS_COMPILER) $< -c -m -o $@ \
		--source-map $@.map \
		&& du -h $< $@

deps:
	mkdir -p node_modules
	npm install

clean:
	rm -f overtone*.js*
