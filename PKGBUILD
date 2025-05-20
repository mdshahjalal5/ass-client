<!DOCTYPE html>
<html lang='en'>
<head>
<title>PKGBUILD - aur.git - AUR Package Repositories</title>
<meta name='generator' content='cgit v1.2.3-70-g09d2'/>
<meta name='robots' content='index, nofollow'/>
<link rel='stylesheet' type='text/css' href='/static/css/cgit.css'/>
<script type='text/javascript' src='/cgit.js'></script>
<link rel='shortcut icon' href='/static/images/favicon.ico'/>
<link rel='alternate' title='Atom feed' href='https://aur.archlinux.org/cgit/aur.git/atom/PKGBUILD?h=wl-kbptr' type='application/atom+xml'/>
<link rel='vcs-git' href='https://aur.archlinux.org/wl-kbptr.git/' title='aur.git Git repository'/>
</head>
<body>
		<div id="archnavbar" class="anb-aur">
			<div id="archnavbarlogo"><h1><a href="/" title="Return to the main page">Arch Linux User Repository</a></h1></div>
			<div id="archnavbarmenu">
				<ul id="archnavbarlist">
					<li id="anb-home"><a href="https://www.archlinux.org/" title="Arch news, packages, projects and more">Home</a></li>
					<li id="anb-packages"><a href="https://www.archlinux.org/packages/" title="Arch Package Database">Packages</a></li>
					<li id="anb-forums"><a href="https://bbs.archlinux.org/" title="Community forums">Forums</a></li>
					<li id="anb-wiki"><a href="https://wiki.archlinux.org/" title="Community documentation">Wiki</a></li>
					<li id="anb-gitlab"><a href="https://gitlab.archlinux.org/archlinux" title="GitLab">GitLab</a></li>
					<li id="anb-security"><a href="https://security.archlinux.org/" title="Arch Linux Security Tracker">Security</a></li>
					<li id="anb-aur"><a href="/" title="Arch Linux User Repository">AUR</a></li>
					<li id="anb-download"><a href="https://www.archlinux.org/download/" title="Get Arch Linux">Download</a></li>
				</ul>
			</div>
		</div><!-- #archnavbar -->
<div id='cgit'><table id='header'>
<tr>
<td class='main'>AUR : wl-kbptr.git</td></tr>
<tr><td class='sub'>AUR Package Repositories | click <a href='/pkgbase/wl-kbptr/'>here</a> to return to the package base details page</td><td class='sub right'></td></tr></table>
<table class='tabs'><tr><td>
<a href='/cgit/aur.git/?h=wl-kbptr'>summary</a><a href='/cgit/aur.git/log/PKGBUILD?h=wl-kbptr'>log</a><a class='active' href='/cgit/aur.git/tree/PKGBUILD?h=wl-kbptr'>tree</a><a href='/cgit/aur.git/commit/PKGBUILD?h=wl-kbptr'>commit</a><a href='/cgit/aur.git/diff/PKGBUILD?h=wl-kbptr'>diff</a><a href='/cgit/aur.git/stats/PKGBUILD?h=wl-kbptr'>stats</a></td><td class='form'><form class='right' method='get' action='/cgit/aur.git/log/PKGBUILD'>
<input type='hidden' name='h' value='wl-kbptr'/><select name='qt'>
<option value='grep'>log msg</option>
<option value='author'>author</option>
<option value='committer'>committer</option>
<option value='range'>range</option>
</select>
<input class='txt' type='search' size='10' name='q' value=''/>
<input type='submit' value='search'/>
</form>
</td></tr></table>
<div class='path'>path: <a href='/cgit/aur.git/tree/?h=wl-kbptr'>root</a>/<a href='/cgit/aur.git/tree/PKGBUILD?h=wl-kbptr'>PKGBUILD</a></div><div class='content'>blob: 6a05d60f5dc651f2261eb403f40027a0974390b6 (<a href='/cgit/aur.git/plain/PKGBUILD?h=wl-kbptr'>plain</a>)
<table summary='blob content' class='blob'>
<tr><td class='linenumbers'><pre><a id='n1' href='#n1'>1</a>
<a id='n2' href='#n2'>2</a>
<a id='n3' href='#n3'>3</a>
<a id='n4' href='#n4'>4</a>
<a id='n5' href='#n5'>5</a>
<a id='n6' href='#n6'>6</a>
<a id='n7' href='#n7'>7</a>
<a id='n8' href='#n8'>8</a>
<a id='n9' href='#n9'>9</a>
<a id='n10' href='#n10'>10</a>
<a id='n11' href='#n11'>11</a>
<a id='n12' href='#n12'>12</a>
<a id='n13' href='#n13'>13</a>
<a id='n14' href='#n14'>14</a>
<a id='n15' href='#n15'>15</a>
<a id='n16' href='#n16'>16</a>
<a id='n17' href='#n17'>17</a>
<a id='n18' href='#n18'>18</a>
<a id='n19' href='#n19'>19</a>
<a id='n20' href='#n20'>20</a>
<a id='n21' href='#n21'>21</a>
<a id='n22' href='#n22'>22</a>
<a id='n23' href='#n23'>23</a>
<a id='n24' href='#n24'>24</a>
<a id='n25' href='#n25'>25</a>
</pre></td>
<td class='lines'><pre><code><span class="hl slc"># Maintainer: Clément Martinez &lt;me at moverest dot xyz&gt;</span>
pkgname<span class="hl opt">=</span>wl<span class="hl kwb">-kbptr</span>
pkgver<span class="hl opt">=</span><span class="hl num">0.3.0</span>
pkgrel<span class="hl opt">=</span><span class="hl num">1</span>
url<span class="hl opt">=</span><span class="hl sng">&quot;https://github.com/moverest/wl-kbptr&quot;</span>
pkgdesc<span class="hl opt">=</span><span class="hl sng">&quot;Control the mouse pointer with the keyboard on Wayland&quot;</span>
arch<span class="hl opt">=(</span><span class="hl sng">&#39;x86_64&#39;</span><span class="hl opt">)</span>
license<span class="hl opt">=(</span><span class="hl sng">&#39;GPL-3.0&#39;</span><span class="hl opt">)</span>
depends<span class="hl opt">=(</span><span class="hl sng">&#39;cairo&#39;</span> <span class="hl sng">&#39;wayland&#39;</span> <span class="hl sng">&#39;libxkbcommon&#39;</span> <span class="hl sng">&#39;opencv&#39;</span> <span class="hl sng">&#39;pixman&#39;</span><span class="hl opt">)</span>
makedepends<span class="hl opt">=(</span><span class="hl sng">&#39;meson&#39;</span> <span class="hl sng">&#39;wayland-protocols&#39;</span><span class="hl opt">)</span>
<span class="hl kwb">source</span><span class="hl opt">=(</span><span class="hl sng">&quot;https://github.com/moverest/wl-kbptr/archive/refs/tags/v</span><span class="hl ipl">$pkgver</span><span class="hl sng">.tar.gz&quot;</span><span class="hl opt">)</span>
sha256sums<span class="hl opt">=(</span><span class="hl sng">&#39;69775029acb8ff7d814a2868afe22e72b8c9c99cbb35b0acf57eccd3609b089c&#39;</span><span class="hl opt">)</span>

build<span class="hl opt">() {</span>
    arch<span class="hl kwb">-meson</span> <span class="hl sng">&quot;</span><span class="hl ipl">$pkgname</span><span class="hl sng">-</span><span class="hl ipl">$pkgver</span><span class="hl sng">&quot;</span> build <span class="hl kwb">-Dopencv</span><span class="hl opt">=</span>enabled
    ninja <span class="hl kwb">-C</span> build
<span class="hl opt">}</span>

package<span class="hl opt">() {</span>
    DESTDIR<span class="hl opt">=</span><span class="hl sng">&quot;</span><span class="hl ipl">$pkgdir</span><span class="hl sng">&quot;</span> ninja <span class="hl kwb">-C</span> build <span class="hl kwc">install</span>
    <span class="hl kwb">cd</span> <span class="hl sng">&quot;</span><span class="hl ipl">$pkgname</span><span class="hl sng">-</span><span class="hl ipl">$pkgver</span><span class="hl sng">&quot;</span>
    <span class="hl kwc">install</span> <span class="hl kwb">-Dm</span> <span class="hl num">0755</span> helpers<span class="hl opt">/</span>wl<span class="hl kwb">-kbptr-sway-active-win -t</span> <span class="hl sng">&quot;</span><span class="hl ipl">$pkgdir</span><span class="hl sng">/usr/bin/&quot;</span>
    <span class="hl kwc">install</span> <span class="hl kwb">-Dm</span> <span class="hl num">0644</span> LICENSE <span class="hl kwb">-t</span> <span class="hl sng">&quot;</span><span class="hl ipl">$pkgdir</span><span class="hl sng">/usr/share/licenses/wl-kbptr/&quot;</span>
    <span class="hl kwc">install</span> <span class="hl kwb">-Dm</span> <span class="hl num">0644</span> README.md <span class="hl kwb">-t</span> <span class="hl sng">&quot;</span><span class="hl ipl">$pkgdir</span><span class="hl sng">/usr/share/doc/wl-kbptr/&quot;</span>
<span class="hl opt">}</span>
</code></pre></td></tr></table>
</div> <!-- class=content -->
<div id="footer">
	<p>
		Copyright &copy; 2004-2023 aurweb Development Team &ndash;
		<strong>AUR packages are user produced content. Any use of the provided files is at your own risk.</strong>
	</p>
</div>
</div> <!-- id=cgit -->
</body>
</html>
